import IconButton from "@/components/IconButton/iconButton";
import "../styles/introducao.css";

export default function Introducao() {
  return (
    <main className="introducao container">
      <div className="introducao-conteudo">
        <img src="../assets/avatar.png" alt="Descrição da imagem" />
        <p>Olá, me chamo Kaiky e sou um</p>
        <h1>
          DESENVOLVEDOR <span>FRONT-END</span> <br /> & <span>UI/UX DESIGNER</span>
        </h1>
        <div className="botao-container">
          <IconButton href="https://www.linkedin.com/in/kaiky-botelho-de-faria-90271730a/" iconSrc="../assets/icones/linkedin.svg"/>
          <IconButton href="https://github.com/kaiky-botelho" iconSrc="../assets/icones/github.svg"/>
        </div>
      </div>
    </main>
  );
}
