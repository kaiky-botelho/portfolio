import "../styles/contato.css";

export default function Contato() {
  return (
    <main className="container">
      <h2>
        Contato<span>.</span>
      </h2>

      <div className="contato">
        <div className="contato-image">
          <img src="../assets/avatar-computador.png" alt="" width={400} />
        </div>
        <div className="contato-conteudo">
          <h3>📬 Entre em Contato</h3>
          <p>
            Se você precisa de um desenvolvedor front-end ou um UI/UX designer,
            estou disponível para novas oportunidades e projetos. Vamos
            transformar ideias em interfaces incríveis!
          </p>
          <div className="contato-items">
            <ul>
              <h4>📌 Como falar comigo?</h4>
              <li>
                📧 
                <a href="mailto: botelhokaiky55@gmail.com">
                  botelhokaiky55@gmail.com
                </a>
              </li>
              <li>
                🔗
                <a href="https://www.linkedin.com/in/kaiky-botelho-de-faria-90271730a/">
                  Linkedin
                </a>
              </li>
              <li>
                💻  <a href="https://github.com/kaiky-botelho">GitHub</a>
              </li>
            </ul>

            <ul>
              <h4>💼 Como posso te ajudar?</h4>
              <li>🚀 Desenvolvimento de interfaces modernas e responsivas</li>
              <li>🎨 Criação de designs intuitivos e acessíveis</li>
              <li>⚡ Performance otimizada para uma experiência fluida</li>
              <li>🖌️ Prototipação interativa e animações em UI/UX</li>
            </ul>
          </div>
          <h3>💬 Vamos trabalhar juntos?</h3>
          <p>Se você tem um projeto em mente ou precisa de um desenvolvedor e designer para sua equipe, estou pronto para ajudar! Me envie uma mensagem e vamos conversar!</p>
        </div>
      </div>
    </main>
  );
}
