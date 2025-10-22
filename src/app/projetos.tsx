"use client"

import { useMemo, useState } from "react";
import "../styles/projeto.css";
import CardProjeto from "@/components/cardProjeto/cardProjeto";

type Categoria = "todos" | "desenvolvimento" | "ui";

type Projeto = {
  imgSrc: string;
  titulo: string;
  buttons: { href: string; iconSrc: string; text: string }[];
  iconesSrc: string[];
  descricao: string;
  categoria: Exclude<Categoria, "todos">; // cada item é "desenvolvimento" ou "ui"
};

const PROJETOS: Projeto[] = [
  {
    imgSrc: "/assets/projetos-image/NeoClass.jpg",
    titulo: "Neo Class",
    buttons: [
      { href: "https://github.com/kaiky-botelho/neo-class", iconSrc: "/assets/icones/github.svg", text: "Repositórío" },
      { href: "https://www.figma.com/design/hf7SqLz4XKutNTsDuMDZo2/Neo-Class---prototipo?node-id=573-2972&t=ftyK0swd6isCT8UH-1", iconSrc: "/assets/icones/figma.png", text: "Protótipo" }
    ],
    iconesSrc: ["/assets/icones/react.png", "/assets/icones/css.png", "/assets/icones/figma.png", "/assets/icones/typescript.png"],
    descricao: "Sistema de gerenciamento escolar com funcionalidades para secretária, professores e alunos",
    categoria: "desenvolvimento",
  },
  {
    imgSrc: "/assets/projetos-image/skycast.png",
    titulo: "SkyCast",
    buttons: [
      { href: "https://github.com/kaiky-botelho/skyCast", iconSrc: "/assets/icones/github.svg", text: "Repositório" },
    ],
    iconesSrc: ["/assets/icones/html.png", "/assets/icones/css.png", "/assets/icones/js.png"],
    descricao: "Aplicação web para previsão do tempo, utilizando a API do OpenWeathe para exibir informações climáticas",
    categoria: "desenvolvimento",
  },
  {
    imgSrc: "/assets/projetos-image/nextBook_E-commerce.jpg",
    titulo: "Next Book E-Commerce",
    buttons: [
      { href: "https://github.com/kaiky-botelho/nextbook", iconSrc: "/assets/icones/github.svg", text: "Repositórío" },
      { href: "https://www.figma.com/design/Irx7mjkdQMkIE7sza4wzqk/NextBook(e-commerce)?node-id=75-28&t=NHVQ1rpscFU0X58j-1", iconSrc: "/assets/icones/figma.png", text: "Protótipo" },
    ],
    iconesSrc: ["/assets/icones/flutter.png", "/assets/icones/figma.png"],
    descricao: "Plataforma de e-commerce para compra e venda de livros, com um design moderno e experiência otimizada para os usuários.",
    categoria: "desenvolvimento",
  },
  {
    imgSrc: "/assets/projetos-image/urbanPizza.jpg",
    titulo: "Urban Pizza",
    buttons: [
      { href: "https://github.com/kaiky-botelho/UrbanPizza", iconSrc: "/assets/icones/github.svg", text: "Repositório" },
      { href: "https://www.figma.com/design/BLw6O75GWU7NblG2zanw7g/Urban-Pizza?node-id=0-1&t=zgtF1vsBhLlRcJwi-1", iconSrc: "/assets/icones/figma.png", text: "Protótipo" },
    ],
    iconesSrc: ["/assets/icones/html.png", "/assets/icones/css.png"],
    descricao: "Landing page para uma pizzaria moderna, destacando seu cardápio e formas de contato.",
    categoria: "desenvolvimento",
  },
  {
    imgSrc: "/assets/projetos-image/alimentaMais.jpg",
    titulo: "Alimenta Mais",
    buttons: [
      { href: "https://github.com/kaiky-botelho/AlimentaMais", iconSrc: "/assets/icones/github.svg", text: "Repositório" },
    ],
    iconesSrc: ["/assets/icones/html.png", "/assets/icones/css.png", "/assets/icones/js.png"],
    descricao: "Plataforma para doação de alimentos, conectando doadores e beneficiários de forma eficiente e segura.",
    categoria: "desenvolvimento",
  },
  {
    imgSrc: "/assets/projetos-image/smartLux.jpg",
    titulo: "Smart Lux",
    buttons: [
      { href: "https://www.figma.com/design/bD1P29ACuJkqweqVT6YvKP/SmartLux?node-id=966-31&t=5JjLSq14lIZersSB-1", iconSrc: "/assets/icones/figma.png", text: "Protótipo" },
    ],
    iconesSrc: ["/assets/icones/figma.png"],
    descricao: "Aplicativo para contratação de serviços elétricos, permitindo que usuários encontrem profissionais qualificados com facilidade.",
    categoria: "ui",
  },
  {
    imgSrc: "/assets/projetos-image/luxShoes.jpg",
    titulo: "Lux Shoes",
    buttons: [
      { href: "https://github.com/kaiky-botelho/Lux_Shoes", iconSrc: "/assets/icones/github.svg", text: "Repositório" },
    ],
    iconesSrc: ["/assets/icones/html.png", "/assets/icones/css.png"],
    descricao: "Landing page para uma loja de calçados, destacando produtos, preços e promoções.",
    categoria: "desenvolvimento",
  },
  {
    imgSrc: "/assets/projetos-image/nextBookRedeSocial.jpg",
    titulo: "Next Book Rede Social",
    buttons: [
      { href: "https://www.figma.com/design/MjvrZbYiLsZQoChL6vab5y/NextBook(Rede-Social)?node-id=37-2&t=e3jYtKBogSgF3uVR-1", iconSrc: "/assets/icones/figma.png", text: "Protótipo" },
    ],
    iconesSrc: ["/assets/icones/figma.png"],
    descricao: "Rede social para leitores, permitindo que usuários compartilhem e descubram livros, além de interagir com outros leitores.",
    categoria: "ui",
  },
];

export default function Projetos() {
  const [filtro, setFiltro] = useState<Categoria>("todos");

  const projetosFiltrados = useMemo(() => {
    if (filtro === "todos") return PROJETOS;
    return PROJETOS.filter(p => p.categoria === filtro);
  }, [filtro]);

  return (
    <main className="container projetos">
      <h2>Projetos<span>.</span></h2>

      {/* Filtros */}
      <div className="projetos-filtros" role="tablist" aria-label="Filtro de projetos">
        <button
          role="tab"
          aria-selected={filtro === "todos"}
          className={`filtro-btn ${filtro === "todos" ? "ativo" : ""}`}
          onClick={() => setFiltro("todos")}
        >
          Todos
        </button>
        <button
          role="tab"
          aria-selected={filtro === "desenvolvimento"}
          className={`filtro-btn ${filtro === "desenvolvimento" ? "ativo" : ""}`}
          onClick={() => setFiltro("desenvolvimento")}
        >
          Desenvolvimento
        </button>
        <button
          role="tab"
          aria-selected={filtro === "ui"}
          className={`filtro-btn ${filtro === "ui" ? "ativo" : ""}`}
          onClick={() => setFiltro("ui")}
        >
          UI/UX        </button>
      </div>

      {/* Lista */}
      <div className="projetos-itens">
        {projetosFiltrados.map((p) => (
          <CardProjeto
            key={p.titulo}
            imgSrc={p.imgSrc}
            titulo={p.titulo}
            buttons={p.buttons}
            iconesSrc={p.iconesSrc}
            descricao={p.descricao}
          />
        ))}
      </div>
    </main>
  );
}
