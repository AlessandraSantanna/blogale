import { cardsData, CardType } from "@/data/cards";
import Html5 from "../html5/page";
import ReactPage from "../react/page";
import TailwindPage from "../tailwindcss/page";
import CssPage from "../Css/page";
import TypeScriptPage from "../TypeScript/page";
import NextjsPage from "../nextjs/page";

const cardComponents: Record<string, React.FC> = {
  html5: Html5,
  react: ReactPage,
  tailwindcss: TailwindPage,
  Css: CssPage,
  TypeScript: TypeScriptPage,
  nextjs: NextjsPage,
};

type Props = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return cardsData.map((cards) => ({
    id: cards.id,
  }));
}

export default function CardPage({ params }: Props) {
  const Component = cardComponents[params.id];

  if (!Component) {
    return <div className="p-8 text-pink-600">Card não encontrado.</div>;
  }

  return (
    <div
      className="relative bg-cover bg-center min-h-screen pt-20"
      style={{ backgroundImage: "url('/foto.jpg')" }}
    >
      {/* Overlay semi-transparente */}
      <div className="absolute inset-0 bg-white/60 z-0"></div>

      {/* Conteúdo */}
      <div className="relative z-10 p-8">
        <Component />
      </div>
    </div>
  );
}