import { transactionService } from "@/services/transactionService";
import { useCallback, useState, useEffect } from "react";

export const useTransaction = (accountId: string = "1") => {
  const [saldo, setSaldo] = useState<number>(0);
  const [receitas, setReceitas] = useState<number>(0);
  const [despesas, setDespesas] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTransactionData = useCallback(async () => {
    try {
      setIsLoading(true);
      const transactions = await transactionService.getAll();

      const depositoTotal = transactions
        .filter((t) => t.type === "deposito")
        .reduce((sum, t) => sum + t.amount, 0);

      const transferenciaTotal = transactions
        .filter((t) => t.type === "transferencia")
        .reduce((sum, t) => sum + t.amount, 0);

      setReceitas(depositoTotal);
      setDespesas(transferenciaTotal);
      setSaldo(depositoTotal - transferenciaTotal);
    } catch (error) {
      console.error("Erro ao tentar resgatar seu saldo atual", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [accountId]);

  useEffect(() => {
    fetchTransactionData();
  }, [fetchTransactionData]);

  return {
    saldo,
    receitas,
    despesas,
    isLoading,
    refresh: fetchTransactionData,
  };
};
