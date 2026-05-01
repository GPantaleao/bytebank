"use client";
import Image from "next/image";

const vantagens = [
  {
    img: "/images/gift.png",
    titulo: "Conta e cartão gratuitos",
    texto: "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.",
  },
  {
    img: "/images/wallet.png",
    titulo: "Saques sem custo",
    texto: "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.",
  },
  {
    img: "/images/star.png",
    titulo: "Programa de pontos",
    texto: "Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!",
  },
  {
    img: "/images/pc.png",
    titulo: "Seguro dispositivos",
    texto: "Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.",
  },
];

export default function Vantagens() {
  return (
    <section className="hero-bg px-4">
      <h3 className="text-2xl font-bold text-gray-700 mb-10 text-center">
        Vantagens do nosso banco:
      </h3>
      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {vantagens.map((v) => (
          <div key={v.titulo} className="flex flex-col items-center gap-3">
            <Image src={v.img} alt={v.titulo} width={64} height={64} className="object-contain mb-2" />
            <h4 className="font-extrabold mb-2 text-[var(--color-golden-600)]">{v.titulo}</h4>
            <p className="text-sm text-gray-700 text-center">{v.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}