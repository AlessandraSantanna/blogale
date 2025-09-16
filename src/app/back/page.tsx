"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Back() {
  return (
    <>
      {/* Menu fixo no topo */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-pink-700">Alessandra</h1>
          <nav className="space-x-6">
            <Link href="/" className="text-pink-600 hover:text-pink-800 transition">Home</Link>
            
            <Link href="/sobre" className="text-pink-600 hover:text-pink-800 transition">Sobre Mim</Link>
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
              {/* Imagem decorativa */}
              <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src="/note.png"
                    alt="Imagem decorativa"
                    fill
                    quality={100}
                    className="object-cover hover:scale-110 duration-300"
                    priority
                  />
                </div>

                <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white shadow-md">
                  <Image
                    src="/back.jpg"
                    alt="Imagem adicional"
                    fill
                    quality={100}
                    priority
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="space-y-6 mt-5 text-pink-900" data-aos="fade-up-left" data-aos-delay="300">
                <h2 className="text-3xl font-bold">O Lado Back-end</h2>
                <p className="text-xl">
                  Depois de dominar o que o usuário vê, é hora de entender o que ele não vê: o Back-end.
                  Essa é a parte que lida com a lógica do servidor, a segurança e os bancos de dados.
                </p>
                <p className="text-xl">
                  O Back-end é responsável por garantir que tudo funcione por trás das cortinas — desde autenticação de usuários até o armazenamento de dados.
                  Tecnologias como Node.js, Express, bancos de dados SQL e NoSQL fazem parte desse universo.
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
