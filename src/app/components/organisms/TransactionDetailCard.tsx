"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Utensils, 
  Gamepad2, 
  Home, 
  Banknote, 
  Package, 
  Pencil, 
  Trash2, 
  ArrowLeft,
  Check,
  X,
  LucideIcon 
} from "lucide-react";
import { ITransaction } from "@/types/transaction";
import { Badge } from "../atoms/Badge";
import { TransactionAmount } from "../molecules/TransactionAmount";
import { Button } from "../atoms/Button";
import { Skeleton } from "../atoms/Skeleton";
import { Modal } from "../atoms/Modal";
import { Select } from "../atoms/Select";
import { transactionService } from "@/services/transactionService";
import { formatLongDate } from "@/utils/dateFormatter";
import { formatCurrency, maskCurrency, parseCurrency } from "@/utils/currencyFormatter";

interface TransactionDetailCardProps {
  transaction?: ITransaction | null;
  isLoading?: boolean;
  onEditSuccess?: (updated: ITransaction) => void;
  className?: string;
}

const categoryIcons: Record<string, { icon: LucideIcon }> = {
  'Alimentação': { icon: Utensils},
  'Lazer': { icon: Gamepad2 },
  'Moradia': { icon: Home},
  'Renda': { icon: Banknote },
  'Outros': { icon: Package },
};

export const TransactionDetailCard = ({ 
  transaction, 
  isLoading,
  onEditSuccess,
  className = ""
}: TransactionDetailCardProps) => {
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    description: transaction?.description || "",
    amount: transaction?.amount || 0,
    type: transaction?.type || 'transferencia',
    category: transaction?.category || 'Outros'
  });

  if (isLoading || !transaction) {
    return (
      <main className={`max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-soft ${className}`}>
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-7 w-24 rounded-full" />
        </div>
        <Skeleton className="h-10 w-64 mb-10" />
        <div className="space-y-5 border-t border-b border-gray-100 py-8 mb-10">
          <div className="flex justify-between"><Skeleton className="h-5 w-32" /><Skeleton className="h-5 w-24" /></div>
          <div className="flex justify-between"><Skeleton className="h-5 w-32" /><Skeleton className="h-5 w-40" /></div>
        </div>
        <div className="flex flex-col sm:flex-row gap-12">
          <Skeleton className="h-12 flex-1 rounded-lg" />
          <Skeleton className="h-12 flex-1 rounded-lg" />
        </div>
      </main>
    );
  }

  const handleToggleEdit = () => {
    setEditData({
      description: transaction.description,
      amount: transaction.amount,
      type: transaction.type,
      category: transaction.category || 'Outros'
    });
    setIsEditing(!isEditing);
  };

  const handleConfirmEdit = async () => {
    const updated = await transactionService.update(transaction.id, editData);
    if (updated) {
      setIsEditing(false);
      router.refresh();
      if (onEditSuccess) onEditSuccess(updated);
    } else {
      alert("Erro ao atualizar transação.");
    }
  };

  const handleDelete = async () => {
    const success = await transactionService.delete(transaction.id);
    if (success) {
      router.push('/transactions');
      router.refresh();
    } else {
      alert("Erro ao excluir a transação.");
    }
  };

  const categoryName = transaction.category || 'Outros';
  const categoryConfig = categoryIcons[categoryName] || categoryIcons['Outros'];

  return (
    <main className={`max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-soft ${className}`}>
      <div className="flex items-center justify-between mb-4">
        {isEditing ? (
          <>
            <input
              type="text"
              className="text-xl font-bold text-gray-800 border-b-2 border-primary-300 focus:outline-none focus:border-primary-600 w-full mr-4"
              value={editData.description}
              onChange={(e) => setEditData({...editData, description: e.target.value})}
            />
            <Select 
              options={Object.keys(categoryIcons).map(category => ({ value: category, label: category }))}
              value={editData.category}
              onChange={(value) => setEditData({...editData, category: value})}
              buttonClassName="p-1"
            />
          </>
        ) : (
          <>
            <h1 className="text-xl font-bold text-gray-800">{transaction.description}</h1>
            <Badge icon={categoryConfig.icon}>{categoryName}</Badge>
          </>
        )}
      </div>

      {isEditing ? (
        <div className="mb-10">
          <label className="block text-xs text-gray-400 font-bold uppercase mb-1">Valor da transação</label>
          <div className="flex items-center border-b-2 border-primary-300 focus:outline-none focus:border-primary-600 w-full">
            <span className="text-4xl font-bold text-gray-800 mr-2">R$</span>
            <input 
              type="text"
              className="text-4xl font-bold text-gray-800 focus:outline-none w-full"
              value={formatCurrency(editData.amount)}
              onChange={(e) => {
                const masked = maskCurrency(e.target.value);
                setEditData({...editData, amount: parseCurrency(masked)});
              }}
            />
          </div>
        </div>
      ) : (
        <TransactionAmount amount={transaction.amount} type={transaction.type} />
      )}

      <div className="space-y-5 border-t border-b border-gray-100 py-8 mb-10">
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-medium">Tipo de transação</span>
          {isEditing ? (
            <Select 
              options={[
                { value: 'transferencia', label: 'Transferência' },
                { value: 'deposito', label: 'Depósito' }
              ]}
              value={editData.type}
              onChange={(value) => setEditData({...editData, type: value as ITransaction["type"]})}
              buttonClassName="p-1"
            />
          ) : (
            <span className="font-semibold text-gray-700">
              {transaction.type === 'transferencia' ? 'Transferência' : 'Depósito'}
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-medium">Data e hora</span>
          <span className="font-semibold text-gray-700">{formatLongDate(transaction.date)}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-12">
        {isEditing ? (
          <>
            <Button 
              variant="default" 
              outline
              className="flex-1" 
              onClick={handleToggleEdit}
              label="Cancelar"
              iconLeft={X}
            />
            <Button 
              variant="primary" 
              className="flex-1"
              onClick={handleConfirmEdit}
              label="Confirmar"
              iconLeft={Check}
            />
          </>
        ) : (
          <>
            <Button 
              variant="primary" 
              className="flex-1"
              onClick={handleToggleEdit}
              label="Editar detalhe"
              iconLeft={Pencil}
            />
            <Modal 
              title="Excluir transação"
              description="Deseja realmente excluir esta transação?"
              onConfirm={handleDelete}
              trigger={
                <Button 
                  variant="danger" 
                  outline
                  className="flex-1" 
                  label="Excluir detalhe"
                  iconLeft={Trash2}
                />
              }
            />
          </>
        )}
      </div>

      {!isEditing && (
        <div className="mt-10 text-center">
          <Button 
            variant="ghost" 
            onClick={() => router.push('/transactions')} 
            className="mx-auto"
            label="Voltar para o extrato"
            iconLeft={ArrowLeft}
          />
        </div>
      )}
    </main>
  );
};
