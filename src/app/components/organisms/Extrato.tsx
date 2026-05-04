"use client";

import Link from "next/link";
import { useEffect, useState, forwardRef, useImperativeHandle, useCallback } from "react";
import { Button } from "@/app/components/atoms/Button";
import { Select } from "@/app/components/atoms/Select";
import { transactionService } from "@/services/transactionService";
import { ITransaction } from "@/types/transaction";
import { formatCurrency } from "@/utils/currencyFormatter";
import { formatDate } from "@/utils/dateFormatter";
import { Modal } from "../atoms/Modal";
import { TransactionDetailCard } from "./TransactionDetailCard";

interface ExtratoProps {
  limit?: number;
}

const MONTHS = [
  { value: "0", label: "Janeiro" },
  { value: "1", label: "Fevereiro" },
  { value: "2", label: "Março" },
  { value: "3", label: "Abril" },
  { value: "4", label: "Maio" },
  { value: "5", label: "Junho" },
  { value: "6", label: "Julho" },
  { value: "7", label: "Agosto" },
  { value: "8", label: "Setembro" },
  { value: "9", label: "Outubro" },
  { value: "10", label: "Novembro" },
  { value: "11", label: "Dezembro" },
];

export const Extrato = forwardRef<any, ExtratoProps>(({ limit }, ref) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  
  // Modal state
  const [selectedTransaction, setSelectedTransaction] = useState<ITransaction | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadTransactions = useCallback(async () => {
    try {
      const data = await transactionService.getAll();
      setTransactions(data);
    } catch (error) {
      console.error("Failed to load transactions:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setSelectedMonth(String(new Date().getMonth()));
  }, []);

  useEffect(() => {
    loadTransactions();
  }, [loadTransactions]);

  useImperativeHandle(ref, () => ({
    refetch: loadTransactions,
  }), [loadTransactions]);

  const filteredTransactions = transactions.filter((t) => {
    const transactionMonth = new Date(t.date).getMonth();
    return transactionMonth === parseInt(selectedMonth);
  });

  const displayedTransactions = limit
    ? filteredTransactions.slice(0, limit)
    : filteredTransactions;

  const hasMore = limit && filteredTransactions.length > limit;

  const handleTransactionClick = (transaction: ITransaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleEditSuccess = (updated: ITransaction) => {
    setTransactions(prev => prev.map(t => t.id === updated.id ? updated : t));
    setSelectedTransaction(updated);
  };

  const handleDeleteSuccess = () => {
    if (selectedTransaction) {
      setTransactions(prev => prev.filter(t => t.id !== selectedTransaction.id));
    }
    setIsModalOpen(false);
  };

  return (
    <section className="w-full bg-white rounded-[15px] shadow-strong p-8 flex flex-col gap-6">

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Extrato</h2>
        {selectedMonth && (
          <Select
            options={MONTHS}
            value={selectedMonth}
            onChange={setSelectedMonth}
            className="w-fit"
            buttonClassName="min-w-[160px]"
          />
        )}
      </div>

      <div className="border-t border-gray-200 pt-6">
        {isLoading ? (
          <div className="text-center text-gray-500 py-8">
            Carregando transações...
          </div>
        ) : filteredTransactions.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            Nenhuma transação neste mês.
          </div>
        ) : (
          <>
            <ul className="space-y-3">
              {displayedTransactions.map((transaction) => (
                <li
                  key={transaction.id}
                  onClick={() => handleTransactionClick(transaction)}
                  className="flex items-center justify-between px-5 py-4 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-semibold text-gray-700">
                        {transaction.type === "deposito"
                          ? "Depósito"
                          : "Transferência"}
                      </p>
                      <p className="text-xs text-gray-400">
                        {formatDate(transaction.date, "DD/MM/YYYY")}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`font-bold text-sm whitespace-nowrap ${
                      transaction.type === "deposito"
                        ? "text-[#62e50a]"
                        : "text-[#eb0e0e]"
                    }`}
                  >
                    {transaction.type === "deposito" ? "+" : "-"}
                    R$ {formatCurrency(transaction.amount)}
                  </p>
                </li>
              ))}
            </ul>
            {hasMore && (
              <div className="flex justify-center mt-6 pt-6 border-t border-gray-200">
                <Link href="/transactions">
                  <Button variant="primary" label="Ver mais" />
                </Link>
              </div>
            )}
          </>
        )}
      </div>

      <Modal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen}
        title="Detalhes da Transação"
        maxWidth="max-w-3xl"
        showCloseButton
      >
        <TransactionDetailCard 
          transaction={selectedTransaction}
          onEditSuccess={handleEditSuccess}
          onDeleteSuccess={handleDeleteSuccess}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </section>
  );
});

Extrato.displayName = "Extrato";
