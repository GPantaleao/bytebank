"use client";

import { useState } from "react";
import Image from "next/image";

import { 
  Eye,      
  EyeOff,   
  ArrowUp,  
  ArrowDown, 
} from "lucide-react";
import line1 from "@/app/assets/line-1.png";
import line2 from "@/app/assets/Line-2.png";
import logoBranco2 from "@/app/assets/logo-branco-2.png";

interface SaldoDashboardProps {
  saldo?: string;
  receitas?: string;
  despesas?: string;
  metaMensagem?: string;
}

export const SaldoDashboard = ({
  saldo,
  receitas,
  despesas,
  metaMensagem = "Seu saldo superou a meta do mês.\nVocê mandou muito bem!",
}: SaldoDashboardProps) => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  return (
    <section className="relative w-[890px] h-[485px] bg-primary-600 rounded-[15px] overflow-hidden p-12 flex flex-col justify-between shadow-strong">

      <div className="relative z-10 w-fit">
        <div className="flex items-center gap-20 mb-4">
          <h2 className="text-xl font-semibold text-white">
            Saldo
          </h2>
          <button 
            onClick={() => setIsBalanceVisible(!isBalanceVisible)}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            <span className="material-icons text-white">
              {isBalanceVisible ? (
                <Eye size={24} /> 
              ) : (
                <EyeOff size={24} />
              )}
            </span>
          </button>
        </div>

        <div className="relative mb-2">
          <div className="w-full h-px relative mt-2">
             <Image src={line1} alt="" fill />
          </div>
        </div>
               <p className="text-white text-xl opacity-90 mb-4">
            Conta Corrente
          </p>
        <p className="text-4xl font-bold text-white tracking-tight mb-5">
          R$ {isBalanceVisible ? saldo : "••••••••"}
        </p>
      </div>

      {/* PARTE CENTRAL: Card de Receitas e Despesas */}
      <div className="relative z-10 w-[380px] h-[100px] bg-white rounded-[15px] shadow-strong flex items-center p-4">
        {/* Receitas */}
        <div className="flex-1 flex items-center gap-4">
         <ArrowUp size={34}className="text-primary-600"/>
          <div>
            <p className="text-sm font-semibold text-gray-600">Receitas</p>
            <p className="text-[var(--font-size-h-sm)] font-bold text-[#62e50a]">
              R$ {receitas}
            </p>
          </div>
        </div>

        <div className="h-16 w-px relative mx-4">
          <Image src={line2} alt="" fill className="object-contain" />
        </div>

        <div className="flex-1 flex items-center gap-4">
         <ArrowDown size={34} className="text-red-500"/>
          <div>
            <p className="text-sm font-semibold text-gray-600">Despesas</p>
            <p className="text-[var(--font-size-h-sm)] font-bold text-[#eb0e0e]">
              R$ {despesas}
            </p>
          </div>
        </div>
      </div>

      {/* PARTE INFERIOR: Logo e Mensagem */}
      <div className="relative z-10 flex items-center gap-4">
        <div className="relative w-[114px] h-[99px]">
          <Image src={logoBranco2} alt="Logo" fill className="object-contain" />
        </div>
        <p className="text-[var(--font-size-h-xs)] text-white leading-relaxed max-w-[300px]">
          {metaMensagem.split("\n").map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </p>
      </div>

    </section>
  );
};