"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-primary-600 text-white px-4 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <Image src="/images/bblogo.png" alt="logo" width={56} height={56} />
          <div className="leading-tight">
            <span className="font-light">byte</span><span className="font-bold">bank</span>
            <p className="text-[10px] tracking-wider">PLANNER FINANCEIRO</p>
          </div>
        </div>
        <nav className="flex gap-8 text-sm">
          <a href="#" className="hover:opacity-80">Sobre</a>
          <a href="#" className="hover:opacity-80">Serviços</a>
        </nav>
      </div>
      <div className="flex gap-4">
        <button className="bg-white text-primary-600 px-5 py-2 rounded-md font-medium">
          Abrir minha conta
        </button>
        <button className="border border-white text-white px-5 py-2 rounded-md font-medium">
          Já tenho conta
        </button>
      </div>
    </header>
  );
}