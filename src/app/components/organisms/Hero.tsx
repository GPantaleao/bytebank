"use client";

export default function Hero() {
  return (
    <section className="hero-bg px-16 py-20 flex flex-col md:flex-row items-center justify-between min-h-[450px]">
      <div className="max-w-xs md:ml-8">
        <h2 className="text-3xl font-bold leading-snug" style={{ color: "#b8860b" }}>
          Experimente mais liberdade no controle da sua vida financeira.
          Crie sua conta com a gente!
        </h2>
      </div>
      <div className="mt-8 md:mt-0">
        <img src="/images/welcome.png" width="1500px"  alt="ilustração" className=" h-auto object-contain" />
      </div>
    </section>
  );
}