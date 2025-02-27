
import "../styles/sobre/sobre.css";
import TextButton from "@/components/textButton/textButton";

export default function Sobre() {
  return (
    <main className="sobre container">
      <h2>sobre mim<span>.</span></h2>
      <div className="sobre-conteudo">
        <img src="../assets/sobre-imagem.png" alt="" />
        <div className="sobre-card">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nostrum animi at tenetur cum pariatur ex blanditiis, nam facilis aut suscipit odit veniam doloribus quidem reiciendis. Et officiis voluptate minus.</p>
          <TextButton type="button">Baixe o CV</TextButton>
        </div>
        </div>
    </main>
  );
}
