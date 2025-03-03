"use client";

import { motion } from "framer-motion";
import IconButton from "@/components/IconButton/iconButton";
import "../styles/introducao.css";

export default function Introducao() {
  return (
    <motion.main 
      className="introducao container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="introducao-conteudo">
        <motion.img 
          src="../assets/avatar.png" 
          alt="Descrição da imagem"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        
        <motion.p 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Olá, me chamo Kaiky e sou um
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          DESENVOLVEDOR <span>FRONT-END</span> <br /> & <span>UI/UX DESIGNER</span>
        </motion.h1>

        <motion.div 
          className="botao-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <IconButton href="https://www.linkedin.com/in/kaiky-botelho-de-faria-90271730a/" iconSrc="../assets/icones/linkedin.svg"/>
          <IconButton href="https://github.com/kaiky-botelho" iconSrc="../assets/icones/github.svg"/>
        </motion.div>
      </div>
    </motion.main>
  );
}
