
import "../styles/sobre/sobre.css";
import TextButton from "@/components/textButton/textButton";

export default function Sobre() {
  return (
    <main className="sobre container">
      <h2>sobre mim<span>.</span></h2>
      <div className="sobre-conteudo">
        <img src="../assets/sobre-imagem.png" alt="" />
        <div className="sobre-card">
          <p>Sou Kaiky Botelho de Faria, desenvolvedor front-end e UI/UX designer. Tenho experiência em HTML, CSS, JavaScript, React e TypeScript. Concluí o curso Técnico em Desenvolvimento de Sistemas e trabalhei em projetos como 'Galactic Explore', 'Next Book' e 'Alimenta Mais', sempre focando em criar interfaces atraentes e funcionais.</p>
          <TextButton type="button">Baixe o CV</TextButton>
        </div>
      </div>
    </main>
  );
}
