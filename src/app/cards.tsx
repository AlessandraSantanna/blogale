// src/components/Card.tsx
"use client";


import { cardsData } from "@/data/cards";
import Card from "./pages/card";

export default function Cards() {
  return (
    <>
      {cardsData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </>
  );
}


