"use client";

import {useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CardType } from "@/data/cards";

export default function Card({ id, title, description, image }: CardType) {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const savedLikes = localStorage.getItem(`likes-${id}`);
    if (savedLikes) {
      setLikes(parseInt(savedLikes));
    }
  }, [id]);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`likes-${id}`, newLikes.toString());
  };
  return (
    <div className="card" data-aos="fade-up">
    <div className="bg-pink-100 rounded-lg shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <Image
        src={image}
        alt={title}
        width={400}
        height={192}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex-grow">
        <h3 className="text-xl font-semibold text-pink-800">{title}</h3>
        <p className="mt-2 text-pink-700">{description}</p>
      </div>

      <div className="px-4 pb-4 flex items-center justify-between">
        <button
          onClick={handleLike}
          className="flex items-center space-x-2 text-pink-600 hover:text-pink-800 transition"
        >
          <span>❤️</span>
          <span>{likes}</span>
        </button>

        <Link href={`/cards/${id}`}>
          <span className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition cursor-pointer">
            Ver
          </span>
        </Link>
      </div>
    </div>
    </div> 
  );
}