"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { accountService } from "@/services/accountService";
import logoBranco2 from "@/app/assets/logo-branco-2.png";
import line1 from "@/app/assets/line-1.png";
import avatar from "@/app/assets/avatar.png";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/transactions", label: "Transferências" },
  { href: "/investments", label: "Investimentos" },
  { href: "/other-services", label: "Outros serviços" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const loadUserName = async () => {
      const name = await accountService.getUserName();
      setUserName(name);
    };

    loadUserName();
  }, []);

  return (
    <aside className="w-[432px] bg-primary-600 min-h-screen flex flex-col items-center py-10">
      <div className="flex flex-col items-center gap-2 mb-10">
        <Image src={logoBranco2} alt="Logo Bytebank" />
        <h1 className="text-white text-[48px] tracking-tight leading-none">
          <span className="font-bold">byte</span>bank
        </h1>
        <span className="text-white text-[12px] font-normal tracking-[0.2em]">
          PLANNER FINANCEIRO
        </span>
      </div>

      <Image src={line1} alt="" aria-hidden="true" className="h-px w-[90%]" />

      <div className="flex items-center gap-3 px-8 py-5">
        <Image
          src={avatar}
          alt="Avatar do usuário"
          className="w-6 h-6 rounded-full object-cover shrink-0"
        />
        <span className="text-white text-[18px] font-bold">{userName ?? "Carregando usuário..."}</span>
      </div>

      <Image src={line1} alt="" aria-hidden="true" className="h-px w-[90%]" />

      <nav className="flex flex-col mt-4 w-full">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-center py-6 text-[18px] text-white ${
                isActive ? "font-extrabold" : "font-normal"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
