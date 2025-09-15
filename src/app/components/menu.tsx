import Link from "next/link";

export default function Menu() {
  return (
    <header className="fixed top-0 left-0 w-full bg-pink-800 text-black shadow z-50">
      <nav className="max-w-2xl mx-auto flex justify-center gap-8 py-4">
        <Link
          href="/"
          className="text-white hover:text-pink-200 text-2xl transition-colors duration-200 font-medium"
        >
          Início
        </Link>

        <Link
          href="/front"
          className="text-white hover:text-pink-200 text-2xl transition-colors duration-200 font-medium"
        >
          FrontEnd
        </Link>

        <Link
          href="/back"
          className="text-white hover:text-pink-200 text-2xl transition-colors duration-200 font-medium"
        >
          BackEnd
        </Link>
      </nav>
    </header>
  );
}
