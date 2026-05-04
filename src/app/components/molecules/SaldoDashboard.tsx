"use client";

import { useState } from "react";
import Image from "next/image";

import { 
  Eye,      
  EyeOff,
} from "lucide-react";
import line1 from "@/app/assets/line-1.png";
import logoBranco2 from "@/app/assets/logo-branco-2.png";

interface SaldoDashboardProps {
  saldo?: string;
  metaMensagem?: string;
  children?: React.ReactNode;
  transactionSlot?: React.ReactNode;
}

export const SaldoDashboard = ({
  saldo,
  metaMensagem = "Seu saldo superou a meta do mês.\nVocê mandou muito bem!",
  children,
  transactionSlot,
}: SaldoDashboardProps) => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  return (
    <section className="w-full bg-primary-600 rounded-[15px] overflow-hidden p-8 shadow-strong">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
        <div className="flex flex-col justify-between gap-6">
          <div className="w-fit">
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

            <div className="mb-2 mt-2">
              <Image src={line1} alt="" className="w-full h-px" />
            </div>
            <p className="text-white text-xl opacity-90 mb-4">
              Conta Corrente
            </p>
            <p className="text-4xl font-bold text-white tracking-tight mb-5">
              R$ {isBalanceVisible ? saldo : "••••••••"}
            </p>
          </div>

          <div>
            {children}
          </div>

          <div className="flex items-center gap-4">
            <Image src={logoBranco2} alt="Logo" className="w-[114px] h-[99px] object-contain" />
            <p className="text-[var(--font-size-h-xs)] text-white leading-relaxed max-w-[300px]">
              {metaMensagem.split("\n").map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-auto">
          {transactionSlot}
        </div>
      </div>
    </section>
  );
};