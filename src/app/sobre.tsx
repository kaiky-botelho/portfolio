"use client";

import { motion } from "framer-motion";
import "../styles/sobre.css";
import TextButton from "@/components/textButton/textButton";

export default function Sobre() {
  return (
    <motion.main 
      className="sobre container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        sobre mim<span>.</span>
      </motion.h2>

      <div className="sobre-conteudo">
        <motion.img
          src="../assets/sobre-imagem.png"
          alt=""
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        />

        <motion.div 
          className="sobre-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            Sou Kaiky Botelho de Faria, desenvolvedor front-end e UI/UX designer. Tenho experiência em HTML, CSS, JavaScript, React e TypeScript. Concluí o curso Técnico em Desenvolvimento de Sistemas e trabalhei em projetos como 'Galactic Explore', 'Next Book' e 'Alimenta Mais', sempre focando em criar interfaces atraentes e funcionais.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <TextButton type="button" href="/">Baixe o CV</TextButton>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}
