"use client";

import { useEffect, useState, forwardRef, useImperativeHandle, useCallback } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/app/components/atoms/Button";
import { Select } from "@/app/components/atoms/Select";
import { transactionService } from "@/services/transactionService";
import { ITransaction } from "@/types/transaction";
import { formatCurrency } from "@/utils/currencyFormatter";
import { formatDate } from "@/utils/dateFormatter";

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

export const Extrato = forwardRef((_, ref) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <section className="w-[890px] bg-white rounded-[15px] shadow-strong p-8 flex flex-col gap-6">

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-gray-900">Extrato</h2>
          <Button variant="primary" rounded iconLeft={Pencil} />
          <Button variant="danger" rounded iconLeft={Trash2} />
        </div>
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

      <div className="border-t border-gray-200">
        {isLoading ? (
          <div className="text-center text-gray-500 py-8">
            Carregando transações...
          </div>
        ) : filteredTransactions.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            Nenhuma transação neste mês.
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-0">
            {filteredTransactions.map((transaction, index) => {
              const isLastInRow = (index + 1) % 4 === 0;

              return (
                <div
                  key={transaction.id}
                  className={`flex flex-col items-start gap-3 px-6 py-4 border-b border-gray-200 ${
                    !isLastInRow ? "border-r border-gray-200" : ""
                  }`}
                >
                  <div className="flex items-center justify-between w-full gap-6">
                    <p className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                      {transaction.type === "deposito"
                        ? "Depósito"
                        : "Transferência"}
                    </p>
                    <p className="text-xs text-gray-400 whitespace-nowrap">
                      {formatDate(transaction.date, "DD/MM")}
                    </p>
                  </div>
                  <p
                    className={`font-bold text-sm ${
                      transaction.type === "deposito"
                        ? "text-[#62e50a]"
                        : "text-[#eb0e0e]"
                    }`}
                  >
                    {transaction.type === "deposito" ? "R$" : "-R$"}
                    {formatCurrency(transaction.amount)}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
});

Extrato.displayName = "Extrato";
