import { cardsData, CardType } from "@/data/cards";

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
  const card = cardsData.find((c) => c.id === params.id);

  if (!card) {
    return <div className="p-8 text-red-600">Card não encontrado.</div>;
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-3xl mx-auto bg-pink-50 rounded-lg shadow-md p-6">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-64 object-cover rounded"
        />
        <h1 className="text-4xl font-bold text-pink-800 mt-4">{card.title}</h1>
        <p className="mt-4 text-pink-700 text-lg">{card.content}</p>

       
      </div>
    </div>
  );
}