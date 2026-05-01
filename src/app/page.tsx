"use client";
import Header from "./components/organisms/Header";
import Hero from "./components/organisms/Hero";
import Vantagens from "./components/organisms/vantagens";
import Footer from "./components/organisms/Footer";

export default function Home() {
  return (
    <main className="hero-bg">
      <Header />
      <Hero />
      <Vantagens />
      <Footer />
    </main>
  );
}
