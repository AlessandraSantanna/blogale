"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-pink-800 text-white shadow z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
       

        {/* Ícone do menu mobile */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>

        {/* Menu desktop */}
        <nav className="hidden lg:flex gap-8">
          <Link href="/" className="hover:text-pink-200 text-lg font-medium">Início</Link>
          <Link href="/SobreMim" className="hover:text-pink-200 text-lg font-medium">Sobre Mim</Link>
          <Link href="/front" className="hover:text-pink-200 text-lg font-medium">FrontEnd</Link>
          <Link href="/back" className="hover:text-pink-200 text-lg font-medium">BackEnd</Link>
        </nav>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="lg:hidden bg-pink-700 px-6 py-4 space-y-4">
          <Link href="/" className="block text-white hover:text-pink-200 text-lg">Início</Link>
          <Link href="/SobreMim" className="block text-white hover:text-pink-200 text-lg">Sobre Mim</Link>
          <Link href="/front" className="block text-white hover:text-pink-200 text-lg">FrontEnd</Link>
          <Link href="/back" className="block text-white hover:text-pink-200 text-lg">BackEnd</Link>
        </nav>
      )}
    </header>
  );
}
