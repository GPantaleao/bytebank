"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-600 text-white px-16 py-16 mt-20">
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div>
          <p className="font-bold text-sm mb-1">Desenvolvido por</p>
          <p className="text-sm">Amanda de Morais Vieira - Rm 371614</p>
          <p className="text-sm">Camilla Tauany Ribeiro Gomes - Rm 371254</p>
          <p className="text-sm">Gustavo Souza Silva Pantaleão - Rm 370998</p>
        </div>
        <div className="md:pt-6 flex flex-col items-center">
          <p className="text-sm">Isabella Falanque Côrtes Arantes - Rm 372374</p>
          <p className="text-sm">Lucas Nery de Araujo - Rm 371141</p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-2">
          <div className="flex items-center gap-0">
            <Image src="/images/bblogo.png" alt="logo" width={64} height={64} className="object-contain -mr-2" />
            <div>
              <p className="text-xl leading-none">
                <span className="font-light">byte</span><span className="font-bold">bank</span>
              </p>
              <p className="tracking-widest uppercase" style={{ fontSize: "0.55rem" }}>planner financeiro</p>
            </div>
          </div>
          <Image src="/images/socials.png" alt="redes sociais" width={96} height={96} className="object-contain mt-0 mr-5" />
        </div>
      </div>
    </footer>
  );
}