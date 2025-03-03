import "../styles/projeto.css";
import CardProjeto from "@/components/cardProjeto/cardProjeto";

export default function Projetos(){
  return (
    <main className="container projetos">
      <h2>Projetos<span>.</span> </h2>
      <div className="projetos-itens">
      <CardProjeto 
    imgSrc='../assets/projetos-image/nextBook_E-commerce.jpg' 
    titulo='Next Book E-Commerce' 
    buttons={[
      { href: "https://github.com/kaiky-botelho/nextbook", iconSrc: "../assets/icones/github-a.svg" },
      { href: "https://www.figma.com/design/Irx7mjkdQMkIE7sza4wzqk/NextBook(e-commerce)?node-id=75-28&t=NHVQ1rpscFU0X58j-1", iconSrc: "../assets/icones/figma-a.svg" },
    ]}/>
      <CardProjeto 
    imgSrc='../assets/projetos-image/urbanPizza.jpg' 
    titulo='Urban Pizza' 
    buttons={[
      { href: "https://github.com/kaiky-botelho/UrbanPizza", iconSrc: "../assets/icones/github-a.svg" },
      { href: "https://www.figma.com/design/BLw6O75GWU7NblG2zanw7g/Urban-Pizza?node-id=0-1&t=zgtF1vsBhLlRcJwi-1", iconSrc: "../assets/icones/figma-a.svg" },
    ]}/>
      <CardProjeto 
    imgSrc='../assets/projetos-image/alimentaMais.jpg' 
    titulo='Alimenta Mais' 
    buttons={[
      { href: "https://github.com/kaiky-botelho/AlimentaMais", iconSrc: "../assets/icones/github-a.svg" },
    ]}/>
      <CardProjeto 
    imgSrc='../assets/projetos-image/smartLux.jpg' 
    titulo='Smart Lux' 
    buttons={[
      { href: "https://www.figma.com/design/bD1P29ACuJkqweqVT6YvKP/SmartLux?node-id=966-31&t=5JjLSq14lIZersSB-1", iconSrc: "../assets/icones/figma-a.svg" },
    ]}/>
      <CardProjeto 
    imgSrc='../assets/projetos-image/luxShoes.jpg' 
    titulo='Lux Shoes' 
    buttons={[
      { href: "https://github.com/kaiky-botelho/Lux_Shoes", iconSrc: "../assets/icones/github-a.svg" },
    ]}/>
      <CardProjeto 
    imgSrc='../assets/projetos-image/saude.jpg' 
    titulo='Sáude Na Palma da Sua Mão' 
    buttons={[
      { href: "https://www.figma.com/design/d3vo5hNgQpfKz4B2JpmLw6/Sa%C3%BAde-Na-palma-da-Sua-m%C3%A3o?node-id=150-2&t=01O6TvCCcq0Z4Jo9-1 ", iconSrc: "../assets/icones/figma-a.svg" },
    ]}/>
      <CardProjeto 
    imgSrc='../assets/projetos-image/nextBookRedeSocial.jpg' 
    titulo='Next Book Rede Social' 
    buttons={[
      { href: "https://www.figma.com/design/MjvrZbYiLsZQoChL6vab5y/NextBook(Rede-Social)?node-id=37-2&t=e3jYtKBogSgF3uVR-1", iconSrc: "../assets/icones/figma-a.svg" },
    ]}/>
      
      </div>
    </main>
  );
}