"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function SobreMim() {
  return (
    <>
      {/* Menu fixo no topo */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-pink-700">Alessandra</h1>
          <nav className="space-x-6">
           <Link href="/" className="text-pink-600 hover:text-pink-800 transition">Home</Link>
            
          </nav>
        </div>
      </header>

      {/* Seção com imagem de fundo */}
      <div
        className={`relative bg-cover bg-center min-h-screen pt-20 ${roboto.className}`}
        style={{ backgroundImage: "url('/foto.jpg')" }}
      >
        {/* Overlay semi-transparente */}
        <div className="absolute inset-0 bg-white/60 z-0"></div>

        {/* Conteúdo principal */}
        <section className="relative z-10 py-16 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Foto */}
              <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src="/sobremim.png"
                    alt="Foto de Alessandra"
                    fill
                    quality={100}
                    className="object-cover hover:scale-110 duration-300"
                    priority
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="space-y-6 mt-5 text-pink-900" data-aos="fade-up-left" data-aos-delay="300">
                <h2 className="text-3xl font-bold">Olá, sou Alessandra!</h2>
                <p className="text-xl">
                  Sou uma desenvolvedora full-stack em início de carreira, apaixonada por criar soluções inovadoras através da tecnologia.
                  Tenho me dedicado a aprender as bases da programação, como HTML, CSS e JavaScript, e estou explorando frameworks como React
                  para construir interfaces mais dinâmicas.
                </p>
                <p className="text-xl">
                  Recentemente, desenvolvi o Projeto Blog Pessoal que me permitiu aplicar os conhecimentos adquiridos e aprimorar minhas habilidades
                  em HTML, CSS, JavaScript, TypeScript, React e Next.js. Meu objetivo é me tornar uma especialista em React e contribuir para
                  o desenvolvimento de projetos desafiadores.
                </p>
                <p className="text-xl">
                  Acredito que a programação é uma área em constante evolução e estou sempre buscando novas oportunidades de aprendizado.
                </p>
              </div>
            </div>

            {/* Botão Voltar para Home */}
            <div className="mt-12 flex justify-center">
             <Link
                href="/"
                className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition"
              >
                Voltar para Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
