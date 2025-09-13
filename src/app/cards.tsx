import Card from "./card";

const cardsData = [
  {
    title: "Html5",
    description: "Aprenda os fundamentos do Html5.",
    image: "/Html5.png",
    link: "/Html5"
  },
   {
    title: "CSS3",
    description: "Aprenda os fundamentos do CSS3.",
    image: "/css.png",
    link: "/CSS3"
  },
   {
    title: "JavaScript",
    description: "Aprenda os fundamentos do JavaScript.",
    image: "/js.jpg",
    link: "/JavaScript"
  }, {
    title: "Node.js",
    description: "Aprenda os fundamentos do Node.js.",
    image: "/node.png",
    link: "/Node.js"
  },
  {
    title: "TypeScript",
    description: "Superset do JavaScript com tipagem estática.",
    image: "/typescript.png",
    link: "/TypeScript"
  },
  {
    title: "React",
    description: "Estilize com rapidez e eficiência.",
    image: "/react.png",
    link: "/React"
  }, {
    title: "Tailwind CSS",
    description: "Aprenda os fundamentos do Tailwind CSS.",
    image: "/tailwind.png",
    link: "/Tailwind CSS"
  }, {
    title: "Next.js",
    description: "Framework poderoso para aplicações web.",
    image: "/next.js.jpg",
    link: "/Next.js"
  },
];

export default function Cards() {
  return (
    <>
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </>
  );
}