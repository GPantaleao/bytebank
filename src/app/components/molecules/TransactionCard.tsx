'use client';

import { type FormEvent, useState } from 'react';
import { flushSync } from 'react-dom';
import { Select } from '@/app/components/atoms/Select';
import { Button } from '@/app/components/atoms/Button';
import { ITransaction } from '@/types/transaction';
import { maskCurrency, parseCurrency } from '@/utils/currencyFormatter';
import { transactionService } from '@/services/transactionService';

const typeOptions: { value: ITransaction['type']; label: string }[] = [
  { value: 'deposito', label: 'Depósito' },
  { value: 'transferencia', label: 'Transferência' },
];

interface TransactionFormData {
  type: ITransaction['type'];
  amount: number;
}

interface TransactionCardProps {
  title?: string;
  onSubmit?: (data: TransactionFormData) => void | Promise<void>;
}

type Status = 'idle' | 'submitting' | 'success';

export const TransactionCard = ({ title = 'Nova transação', onSubmit }: TransactionCardProps) => {
  const [type, setType] = useState('');
  const [amountDisplay, setAmountDisplay] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const isValid = type.length > 0 && parseCurrency(amountDisplay) > 0;
  const isSubmitting = status === 'submitting';

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountDisplay(maskCurrency(e.target.value));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid || isSubmitting) return;

    flushSync(() => setStatus('submitting'));

    try {
      const amount = parseCurrency(amountDisplay);
      const transactionType = type as ITransaction['type'];

      const newTransaction: Omit<ITransaction, 'id'> = {
        amount,
        type: transactionType,
        date: new Date().toISOString(),
        description: transactionType === 'deposito' ? 'Depósito' : 'Transferência',
      };

      await transactionService.create(newTransaction);
      await onSubmit?.({ type: transactionType, amount });

      setType('');
      setAmountDisplay('');
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Failed to create transaction:', error);
      setStatus('idle');
    }
  };

  const buttonLabel =
    status === 'submitting' ? 'Processando...' :
    status === 'success'    ? 'Concluído!' :
                              'Concluir transação';

  return (
    <section className="bg-white rounded-2xl shadow-strong p-10 w-full max-w-md flex flex-col gap-6">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>

      {status === 'success' && (
        <div className="flex items-center gap-2 bg-primary-100 border border-primary-300 text-gray-900 rounded-lg px-4 py-3 text-sm font-bold">
          <span>✓</span>
          <span>Transação concluída com sucesso!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Tipo de transação */}
        <Select
          options={typeOptions}
          value={type}
          onChange={setType}
          placeholder="Selecione o tipo de transação"
          className="w-full"
          buttonClassName="w-full px-4 py-3"
        />

        {/* Valor */}
        <div className="flex flex-col gap-1">
          <label className="text-md text-gray-800 font-bold">Valor</label>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded px-4 py-3 focus-within:ring-2 focus-within:ring-primary-300 transition-all">
            <span className="text-gray-800 font-medium text-sm shrink-0">R$</span>
            <input
              type="text"
              inputMode="decimal"
              value={amountDisplay}
              onChange={handleAmountChange}
              placeholder="0,00"
              aria-label="Valor da transação"
              className="flex-1 bg-transparent text-gray-800 text-lg focus:outline-none placeholder:text-gray-300 placeholder:font-normal"
            />
          </div>
        </div>

        <Button
          type="submit"
          variant={status === 'success' ? 'primary' : 'primary'}
          label={buttonLabel}
          disabled={!isValid || isSubmitting || status === 'success'}
          className="w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none"
        />
      </form>
    </section>
  );
};
