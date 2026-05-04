import { ArrowDown, ArrowUp } from "lucide-react";

interface ReceitasDespesasCardProps {
  receitas?: string;
  despesas?: string;
}

export const ReceitasDespesasCard = ({ receitas, despesas }: ReceitasDespesasCardProps) => {
  return (
    <div className="w-[380px] h-[100px] bg-white rounded-[15px] shadow-strong flex items-center p-4">
      <div className="flex-1 flex items-center gap-4">
        <ArrowUp size={34} className="text-primary-600" />
        <div>
          <p className="text-sm font-semibold text-gray-600">Receitas</p>
          <p className="text-[var(--font-size-h-sm)] font-bold text-[#62e50a]">
            R$ {receitas}
          </p>
        </div>
      </div>

      <div className="h-16 border-l border-gray-300 mx-4" />

      <div className="flex-1 flex items-center gap-4">
        <ArrowDown size={34} className="text-red-500" />
        <div>
          <p className="text-sm font-semibold text-gray-600">Despesas</p>
          <p className="text-[var(--font-size-h-sm)] font-bold text-[#eb0e0e]">
            R$ {despesas}
          </p>
        </div>
      </div>
    </div>
  );
};