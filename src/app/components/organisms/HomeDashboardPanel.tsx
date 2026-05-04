import { SaldoDashboard } from "@/app/components/molecules/SaldoDashboard";
import { TransactionCard } from "@/app/components/molecules/TransactionCard";
import { ReceitasDespesasCard } from "@/app/components/molecules/ReceitasDespesasCard";
import { ITransaction } from "@/types/transaction";

interface TransactionFormData {
  type: ITransaction["type"];
  amount: number;
}

interface HomeDashboardPanelProps {
  saldo?: string;
  receitas?: string;
  despesas?: string;
  metaMensagem?: string;
  onSubmit?: (data: TransactionFormData) => void | Promise<void>;
}

export const HomeDashboardPanel = ({
  saldo,
  receitas,
  despesas,
  metaMensagem,
  onSubmit,
}: HomeDashboardPanelProps) => {
  return (
    <>
      <SaldoDashboard
        saldo={saldo}
        metaMensagem={metaMensagem}
        transactionSlot={<TransactionCard onSubmit={onSubmit} />}
      >
        <ReceitasDespesasCard receitas={receitas} despesas={despesas} />
      </SaldoDashboard>
    </>
  );
};