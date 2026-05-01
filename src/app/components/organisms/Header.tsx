"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../atoms/Button";

export default function Header() {
  return (
    <header className="bg-primary-600 text-white px-4 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-32">
        <div className="flex items-center gap-2 text-2xl">
          <Image src="/images/bblogo.png" alt="logo" width={72} height={72} />
          <div className="leading-tight">
            <span className="font-light">byte</span><span className="font-bold">bank</span>
            <p className="text-[10px] tracking-wider">PLANNER FINANCEIRO</p>
          </div>
        </div>
        <nav className="flex gap-8 text-lg">
          <a href="#" className="hover:opacity-80">Sobre</a>
          <a href="#" className="hover:opacity-80">Serviços</a>
        </nav>
      </div>
      <div className="flex gap-4">
        <Link href="/home">
          <Button 
            label="Abrir minha conta" 
            variant="default"
          />
        </Link>
        <Link href="/home">
          <Button 
            label="Já tenho conta" 
            variant="primary"
          />
        </Link>
      </div>
    </header>
  );
}