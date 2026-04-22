export interface ITransaction {
  id: string;
  amount: number;
  type: 'transferencia' | 'deposito';
  date: string;
  description: string;
  category?: string;
}
