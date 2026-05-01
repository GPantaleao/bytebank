import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-bg px-16 flex flex-col md:flex-row items-center justify-between min-h-[450px]">
      <div className="max-w-2xl md:ml-8">
        <h2 className="text-3xl font-extrabold leading-snug text-pretty" style={{ color: "#b8860b" }}>
          Experimente mais liberdade no controle da sua vida financeira.
          Crie sua conta com a gente!
        </h2>
      </div>
      <div className="mt-8 md:mt-0">
        <Image
          src="/images/welcome.png"
          alt="ilustração"
          width={1200}
          height={700}
          className="h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}