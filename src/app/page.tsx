"use client";

import Image from "next/image";
import Link from "next/link";
import Menu from "./components/menu";
import Cards from "./cards";
import { Roboto, Indie_Flower } from "next/font/google";
import About from "./components/about";



import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // escolha os pesos
});

const indie = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
});


export default function Home() {
   useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <main>
      {/* Seção do topo com imagem de fundo */}
      <section
        className="relative flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/foto.jpg')", minHeight: "80vh" }} // controla o tamanho da div
      >
        {/* Overlay semi-transparente */}
        <div className="absolute inset-0 bg-white/50 z-0"></div>

        {/* Conteúdo centralizado */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <Menu />
      

          <h1 className="text-pink-800 text-6xl md:text-8xl font-bold mt-6">
            {/*Alessandra Santana*/}
          </h1>

          <p className="text-pink-950 mt-6 mb-6 bg-pink-300 text-xl md:text-2xl px-6 py-4 rounded-lg">
            O Blog da Programadora
          </p>

          <h2 className="text-pink-800 text-5xl md:text-7xl font-semibold mb-6">
            Dev Koru
          </h2>
        </div>
      </section>

     {/* Seção de cards com fundo branco */}
<section className={`py-2 px-6 bg-white ${roboto.className}`}>
<p className="text-center text-pink-950 font-bold mt-6 mb-6 text-xl md:text-4xl px-6">
  Do Zero ao FullStack: Minha Jornada com o Koru
</p>

 <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
  <Cards />
</div>
 
</section>

    </main>
  );
}
