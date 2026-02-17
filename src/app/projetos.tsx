"use client"

import { useMemo, useState } from "react";
import "../styles/projeto.css";
import CardProjeto from "@/components/cardProjeto/cardProjeto";
import ModalProjeto from "@/components/modalProjeto/modalProjeto";

type Categoria = "todos" | "desenvolvimento" | "ui";

type Projeto = {
  imgSrc: string;
  titulo: string;
  buttons: { href: string; iconSrc: string; text: string }[];
  iconesSrc: string[];
  descricao: string;
  descricaoCompleta: string;
  tecnologias: { nome: string; iconSrc: string }[];
  categoria: Exclude<Categoria, "todos">; // cada item é "desenvolvimento" ou "ui"
};

const PROJETOS: Projeto[] = [
    {
    imgSrc: "/assets/projetos-image/GB.jpg",
    titulo: "GB - Gestão de Benefícios",
    buttons: [
      { href: "https://github.com/kaiky-botelho/GB", iconSrc: "/assets/icones/github.svg", text: "Repositório" },
    ],
    iconesSrc: ["/assets/icones/react.png", "/assets/icones/js.png"],
    descricao: "App mobile para centralizar gestão de benefícios com solicitações, agendamentos, assinatura digital e chatbot integrado.",
    descricaoCompleta: "Projeto de conclusão do curso técnico desenvolvido para centralizar e digitalizar a comunicação entre colaboradores e a equipe de gestão de benefícios. O app mobile substitui processos manuais descentralizados (WhatsApp, Teams, ligações e documentos físicos) por fluxos digitais organizados e rastreáveis. A solução permite solicitar benefícios, agendar consultas, enviar e assinar documentos digitalmente com pré-visualização, e consultar histórico de solicitações. Como diferencial, possui chatbot integrado que orienta colaboradores, responde dúvidas frequentes e agiliza contato com a gestão. O sistema também oferece notificações automáticas, como lembretes de consultas, melhorando a eficiência operacional e experiência do usuário.",
    tecnologias: [
      { nome: "React Native", iconSrc: "/assets/icones/react.png" },
      { nome: "JavaScript", iconSrc: "/assets/icones/js.png" }
    ],
    categoria: "desenvolvimento",
  },
    {
    imgSrc: "/assets/projetos-image/brasken.jpg",
    titulo: "Skiil UP - desafio Braskem",
    buttons: [
      { href: "https://www.figma.com/design/ApbbqnTYVci564cO46dp2S/SkillUP?node-id=0-1&t=GAexOPalTL0mlsYw-1", iconSrc: "/assets/icones/figma.png", text: "Protótipo" },
    ],
    iconesSrc: ["/assets/icones/figma.png"],
    descricao: "Plataforma gamificada com IA para conectar alunos do SENAI a oportunidades através de dashboard, sistema de pontuação e microcursos.",
    descricaoCompleta: "Plataforma digital desenvolvida para o Desafio Braskem focada em melhorar a empregabilidade de alunos do SENAI. O projeto de UI/UX combina gamificação e inteligência artificial para criar uma experiência personalizada onde alunos acompanham seu progresso profissional em tempo real através de sistema de pontuação e conquistas. Ao completar ações como atualizar currículo, realizar testes técnicos ou participar de simulações de entrevista, o usuário aumenta seu score de contratabilidade. Quando atinge 100%, o perfil é priorizado nos algoritmos das empresas parceiras. O sistema inclui portfólio profissional, vídeos de apresentação com orientação de IA, missões semanais personalizadas e chatbot mentor de carreira. Para gestão institucional, foram projetadas telas de Dashboard com KPIs, Mapa Interativo de Empregabilidade, Feiras e Eventos, Microcursos Internos, Desafios Industriais, Ranking de Destaques, IA Gestora de Recomendação e Painel de Empresas Parceiras.",
    tecnologias: [
      { nome: "Figma", iconSrc: "/assets/icones/figma.png" }
    ],
    categoria: "ui",
  },
  {
    imgSrc: "/assets/projetos-image/NeoClass.jpg",
    titulo: "Neo Class",
    buttons: [
      { href: "https://github.com/kaiky-botelho/neo-class", iconSrc: "/assets/icones/github.svg", text: "Repositórío" },
      { href: "https://www.figma.com/design/hf7SqLz4XKutNTsDuMDZo2/Neo-Class---prototipo?node-id=573-2972&t=ftyK0swd6isCT8UH-1", iconSrc: "/assets/icones/figma.png", text: "Protótipo" }
    ],
    iconesSrc: ["/assets/icones/react.png", "/assets/icones/css.png", "/assets/icones/figma.png", "/assets/icones/typescript.png"],
    descricao: "Sistema de gerenciamento escolar com funcionalidades para secretária, professores e alunos",
    descricaoCompleta: "Neo Class é um sistema completo de gerenciamento escolar desenvolvido para otimizar a administração educacional. O projeto oferece diferentes interfaces e funcionalidades personalizadas para secretária, professores e alunos. A secretária pode gerenciar turmas, matrículas e comunicados. Os professores têm acesso a ferramentas para lançamento de notas, frequência e acompanhamento pedagógico. Já os alunos podem visualizar suas notas, horários e comunicados da escola. O sistema foi desenvolvido com foco em usabilidade e eficiência.",
    tecnologias: [
      { nome: "React", iconSrc: "/assets/icones/react.png" },
      { nome: "TypeScript", iconSrc: "/assets/icones/typescript.png" },
      { nome: "CSS", iconSrc: "/assets/icones/css.png" },
      { nome: "Figma", iconSrc: "/assets/icones/figma.png" }
    ],
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
    descricaoCompleta: "SkyCast é uma aplicação web moderna para consulta de previsão do tempo em tempo real. Utilizando a API do OpenWeather, o projeto oferece informações climáticas detalhadas como temperatura, umidade, velocidade do vento e condições meteorológicas. A interface é intuitiva e responsiva, permitindo que usuários consultem o clima de qualquer cidade do mundo. O design foi pensado para proporcionar uma experiência visual agradável com ícones representativos das condições climáticas.",
    tecnologias: [
      { nome: "HTML", iconSrc: "/assets/icones/html.png" },
      { nome: "CSS", iconSrc: "/assets/icones/css.png" },
      { nome: "JavaScript", iconSrc: "/assets/icones/js.png" }
    ],
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
    descricaoCompleta: "Next Book é uma plataforma completa de e-commerce dedicada à compra e venda de livros. O projeto foi desenvolvido com Flutter para garantir uma experiência nativa em dispositivos móveis. A aplicação conta com funcionalidades como busca avançada de livros, carrinho de compras, sistema de favoritos, avaliações de usuários e recomendações personalizadas. O design foi cuidadosamente elaborado no Figma, priorizando a usabilidade e uma jornada de compra fluida para os usuários.",
    tecnologias: [
      { nome: "Flutter", iconSrc: "/assets/icones/flutter.png" },
      { nome: "Figma", iconSrc: "/assets/icones/figma.png" }
    ],
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
    descricaoCompleta: "Urban Pizza é uma landing page desenvolvida para uma pizzaria moderna. O projeto apresenta um design atrativo que destaca o cardápio variado de pizzas, informações sobre a empresa, horários de funcionamento e formas de contato. A página foi estruturada com HTML semântico e estilizada com CSS moderno, incluindo animações e transições suaves. O layout é totalmente responsivo, garantindo uma experiência consistente em todos os dispositivos.",
    tecnologias: [
      { nome: "HTML", iconSrc: "/assets/icones/html.png" },
      { nome: "CSS", iconSrc: "/assets/icones/css.png" },
      { nome: "Figma", iconSrc: "/assets/icones/figma.png" }
    ],
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
    descricaoCompleta: "Alimenta Mais é uma plataforma social que visa conectar doadores de alimentos com beneficiários que necessitam de ajuda. O projeto foi desenvolvido com o objetivo de reduzir o desperdício de alimentos e combater a fome. A aplicação permite que estabelecimentos, restaurantes e pessoas cadastrem alimentos disponíveis para doação, enquanto instituições beneficentes e famílias podem visualizar e solicitar essas doações. O sistema inclui funcionalidades de cadastro, busca geolocalizada e agendamento de retiradas.",
    tecnologias: [
      { nome: "HTML", iconSrc: "/assets/icones/html.png" },
      { nome: "CSS", iconSrc: "/assets/icones/css.png" },
      { nome: "JavaScript", iconSrc: "/assets/icones/js.png" }
    ],
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
    descricaoCompleta: "Smart Lux é um projeto de UI/UX para um aplicativo mobile focado na contratação de serviços elétricos. O protótipo foi desenvolvido no Figma com atenção especial à experiência do usuário. A aplicação permite que clientes encontrem eletricistas qualificados próximos à sua localização, visualizem avaliações, comparem orçamentos e agendem serviços. Para os profissionais, o app oferece ferramentas para gerenciar sua agenda, receber solicitações e construir sua reputação através de avaliações.",
    tecnologias: [
      { nome: "Figma", iconSrc: "/assets/icones/figma.png" }
    ],
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
    descricaoCompleta: "Lux Shoes é uma landing page elegante desenvolvida para uma loja de calçados premium. O projeto apresenta um design sofisticado que valoriza os produtos através de imagens de alta qualidade, descrições detalhadas e informações sobre preços e promoções. A página foi construída com HTML e CSS, utilizando técnicas modernas de layout como Flexbox e Grid. O design responsivo garante que a experiência seja excelente tanto em desktop quanto em dispositivos móveis.",
    tecnologias: [
      { nome: "HTML", iconSrc: "/assets/icones/html.png" },
      { nome: "CSS", iconSrc: "/assets/icones/css.png" }
    ],
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
    descricaoCompleta: "Next Book Rede Social é um protótipo de UI/UX para uma plataforma social voltada para amantes da leitura. O projeto visa criar uma comunidade onde leitores podem compartilhar suas experiências literárias, fazer resenhas, criar listas de leitura e descobrir novos livros através de recomendações personalizadas. O design inclui funcionalidades como feed de atividades, grupos de discussão, desafios de leitura e sistema de gamificação para incentivar o hábito da leitura. Todo o fluxo de navegação foi pensado para criar uma experiência social engajadora.",
    tecnologias: [
      { nome: "Figma", iconSrc: "/assets/icones/figma.png" }
    ],
    categoria: "ui",
  },
];

export default function Projetos() {
  const [filtro, setFiltro] = useState<Categoria>("todos");
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(null);

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
            onClick={() => setProjetoSelecionado(p)}
          />
        ))}
      </div>

      {/* Modal */}
      {projetoSelecionado && (
        <ModalProjeto
          isOpen={!!projetoSelecionado}
          onClose={() => setProjetoSelecionado(null)}
          titulo={projetoSelecionado.titulo}
          imgSrc={projetoSelecionado.imgSrc}
          descricaoCompleta={projetoSelecionado.descricaoCompleta}
          tecnologias={projetoSelecionado.tecnologias}
          buttons={projetoSelecionado.buttons}
        />
      )}
    </main>
  );
}
