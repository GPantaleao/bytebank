
"use client";
import { useRef } from "react";
import { SaldoDashboard } from "./components/molecules/SaldoDashboard";
import { TransactionCard } from "./components/molecules/TransactionCard";
import { Extrato } from "./components/organisms/Extrato";
import { formatCurrency } from "@/utils/currencyFormatter";
import { useTransaction } from "@/hooks/useTransaction";

interface ExtratoHandle {
  refetch: () => Promise<void>;
}

export default function Home() {
  const { saldo, despesas, receitas, refresh } = useTransaction();
  const extratoRef = useRef<ExtratoHandle>(null);

  const handleTransaction = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    refresh();
    extratoRef.current?.refetch();
  };

  return (
    <div className="relative w-fit left-20 top-10 flex flex-col gap-6">
      <div className="relative">
        <SaldoDashboard
          saldo={formatCurrency(saldo)}
          receitas={formatCurrency(receitas)}
          despesas={formatCurrency(despesas)}
          metaMensagem={
            saldo < 0
              ? "Atenção: Seu saldo está negativo.\nRecomendamos rever suas despesas."
              : "Seu saldo superou a meta do mês.\nVocê mandou muito bem!"
          }
        />
        <div className="pl-6 absolute right-7 top-1/2 -translate-y-1/2 z-50">
          <TransactionCard onSubmit={handleTransaction} />
        </div>
      </div>
      <Extrato ref={extratoRef} />
    </div>
  );
}
