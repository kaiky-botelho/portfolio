"use client";

import IconTextButton from "@/components/iconTextButton/iconTextButton";
import FormContato from "@/components/formContato/formContato";
import "../styles/contato.css";
import { motion } from "framer-motion";

const containerVariantsLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const containerVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

export default function Contato() {
  return (
    <motion.main 
      className="container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>
        Contato<span>.</span>
      </h2>

      <div className="contato">
        {/* Bloco da imagem (entrada da esquerda) */}
        <motion.div 
          className="contato-image"
          variants={containerVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={"../assets/avatar-computador.png"} alt="Avatar de computador" width={400} />
        </motion.div>
        
        {/* Bloco do conteúdo (entrada da direita) */}
        <motion.div 
          className="contato-conteudo"
          variants={containerVariantsRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
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
                <a href="mailto:botelhokaiky55@gmail.com">botelhokaiky55@gmail.com</a>
              </li>
              <li>
                🔗 <a href="https://www.linkedin.com/in/kaiky-botelho-de-faria-90271730a/">Linkedin</a>
              </li>
              <li>
                💻 <a href="https://github.com/kaiky-botelho">GitHub</a>
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
          <p>
            Se você tem um projeto em mente ou precisa de um desenvolvedor e designer para sua equipe, estou pronto para ajudar!
            Me envie uma mensagem e vamos conversar!
          </p>

        </motion.div>
      </div>

      {/* Formulário de Contato */}
      <motion.div
        className="formulario-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="formulario-header">
          <h3>✉️ Envie uma Mensagem Direta</h3>
          <p>
            Prefere entrar em contato de forma rápida? Preencha o formulário abaixo e envie sua mensagem diretamente para meu email. 
            Responderei assim que possível!
          </p>
        </div>
        <FormContato />
      </motion.div>
    </motion.main>
  );
}
