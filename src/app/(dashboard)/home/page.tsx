"use client";
import { useRef } from "react";
import { Extrato } from "@/app/components/organisms/Extrato";
import { HomeDashboardPanel } from "@/app/components/organisms/HomeDashboardPanel";
import { formatCurrency } from "@/utils/currencyFormatter";
import { useTransaction } from "@/hooks/useTransaction";

interface ExtratoHandle {
  refetch: () => Promise<void>;
}

export default function HomePage() {
  const { saldo, despesas, receitas, refresh } = useTransaction();
  const extratoRef = useRef<ExtratoHandle>(null);

  const handleTransaction = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    refresh();
    extratoRef.current?.refetch();
  };

  return (
    <div className="w-full max-w-285 mx-auto px-6 py-10 flex flex-col gap-6">
      <HomeDashboardPanel
        saldo={formatCurrency(saldo)}
        receitas={formatCurrency(receitas)}
        despesas={formatCurrency(despesas)}
        metaMensagem={
          saldo < 0
            ? "Atenção: Seu saldo está negativo.\nRecomendamos rever suas despesas."
            : "Seu saldo superou a meta do mês.\nVocê mandou muito bem!"
        }
        onSubmit={handleTransaction}
      />
      <Extrato ref={extratoRef} limit={5} />
    </div>
  );
}
