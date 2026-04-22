interface TransactionAmountProps {
  amount: number;
  type: 'transferencia' | 'deposito';
  className?: string;
}

export const TransactionAmount = ({ amount, type, className = "" }: TransactionAmountProps) => {
  const isExpense = type === 'transferencia';
  
  return (
    <div className={`text-4xl font-bold mb-10 ${isExpense ? 'text-red-500' : 'text-green-500'} ${className}`}>
      {isExpense ? '- ' : '+ '}
      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount)}
    </div>
  );
};
