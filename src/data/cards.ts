// src/data/cards.ts

export type CardType = {
  id: string;
  title: string;
  description: string;
  image: string;
  content: string;
  link?: string;
  category: string; // nova propriedade

};

export const cardsData: CardType[] = [
  {
    id: "nextjs",
    title: "Next.js",
    description: "Este foi o \"coringa\" do curso. O Next.js é um framework completo, um framework React para criação de aplicações modernas, que usa React no front, mas também tem recursos poderosos no back-end. Ele nos ajuda a construir aplicações mais robustas e eficientes.",
    image: "/next.js.jpg",
    content: "Next.js permite renderização híbrida e rotas dinâmicas com facilidade.",
    link: "/cards/nextjs" ,
    category: "backend"

  },
  {
    id: "TypeScript",
    title: "TypeScript",
    description: "O TypeScript é como um superpoder para o JavaScript. Ele adiciona um sistema de tipos, o que significa que podemos definir o tipo de dado que uma variável, uma função ou um objeto deve ter. Isso pode parecer um detalhe, mas na prática, ajuda a encontrar e corrigir erros antes mesmo de rodar o código",
    image: "/ts.webp",
    content: "TypeScript adiciona tipagem estática ao JavaScript.",
    link: "/cards/typescript",
    category: "frontend"
  
  },    
  {
    id: "react",
    title: "React",
    description: "O React é uma biblioteca JavaScript para a construção de interfaces de usuário (UI). Ele nos permite criar componentes reutilizáveis, como botões, cards ou menus. Em vez de escrever todo o código da página de uma só vez, podemos montar a interface como se estivéssemos brincando com blocos de montar. ",
    image: "/react.png",
    content: "React é uma biblioteca JavaScript para construir interfaces de usuário.",
    link: "/cards/react",
    category: "frontend"

  }, 
  {
    id: "tailwindcss",
    title: "Tailwind CSS",
    description: "Com o Tailwind, podemos estilizar nossos componentes diretamente no código HTML, o que agiliza o processo de design e permite criar layouts personalizados de forma muito mais eficiente.",
    image: "/tailwind.jpg",
    content: "Tailwind é um framework utilitário para estilização rápida e responsiva.",
    link: "/cards/tailwind",
    category: "frontend"

  }, 
  
 
  {
    id: "GitHub",
    title: "GitHub",
    description: "O GitHub não é uma tecnologia de programação, mas sim uma ferramenta fundamental para qualquer desenvolvedor. Pense nele como uma plataforma de colaboração e controle de versão. ",
    image: "/github.jpg",
    content: "GitHub é uma plataforma de hospedagem de código-fonte com controle de versão.",
    link: "/cards/github",
    category: "devops"
  },
   {
    id: "javascript",
    title: "JavaScript",
    description: "Essa é a linguagem que adiciona a interatividade. É o motor que faz as coisas acontecerem. Com o JavaScript, podemos criar animações, validar formulários, mostrar ou esconder elementos e muito mais. ",
    image: "/js.jpg",
    content: "JavaScript é uma linguagem de programação versátil.",
    link: "/cards/javascript",
    category: "frontend"

  },
   {
    id: "nodejs",
    title: "Node.js",
    description: "A grande surpresa para mim foi poder usar JavaScript também no Back-end com o Node.js. Isso torna a comunicação entre o front e o back muito mais fluida.",
    image: "/node.png",
    content: "Node.js é um ambiente de execução para JavaScript no lado do servidor.",
    link: "/cards/nodejs",
    category: "backend"
  }, {
    id: "html5",
    title: "Html",
    description: "É o esqueleto da página. Pense nele como a estrutura de uma casa — as paredes, o telhado e os cômodos. É com o HTML que definimos o conteúdo, como títulos, parágrafos e links.",
    image: "/html5.png",
   content: "HTML é a linguagem de marcação padrão para criação de páginas da Web.",
   link: "/cards/html5", 
    category: "frontend"

   
  },
   {
    id: "Css",
    title: "CSS3",
    description: "Se o HTML é o esqueleto, o CSS é a decoração. Ele dá vida à página, definindo cores, fontes, layouts e até mesmo como ela se adapta a diferentes tamanhos de tela (o que chamamos de responsividade). ",
    image: "/css.png",
    content: "CSS3 é a terceira versão do CSS.",
    link: "/cards/Css",
    category: "frontend"
  },
  
];

