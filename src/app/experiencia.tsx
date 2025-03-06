"use client";

import { motion } from "framer-motion";
import Timeline, { TimelineItem } from "@/components/timeline/timeline";
import '../styles/experiencia.css';

// Variantes para animação de entrada (esquerda e direita)
const containerVariantsLeft = {
  hidden: { opacity: 0, x: -50 },  // Entrada da esquerda
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const containerVariantsRight = {
  hidden: { opacity: 0, x: 50 },  // Entrada da direita
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

export default function Experiencia() {
  return (
    <main className="experiencia container">
      <h2>Formação <span>&</span> Experiência<span>.</span></h2>
      <div className="experiencia-itens">
        {/* Bloco 1 - Formação (entrada da esquerda) */}
        <motion.div
          className="experiencia-item"
          variants={containerVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Timeline>
            <TimelineItem
              timestamp="2024 - ATUAL"
              type="Técnico"
              subtitle="DESENVOLVIMENTO DE SISTEMAS"
              title="SENAI Marcio Bagueira Leal"
            />
            <TimelineItem
              timestamp="2023 - 2024"
              type="Técnico"
              subtitle="DESENVOLVIMENTO DE SISTEMAS"
              title="ETEC Pedro Badran"
            />
            <TimelineItem
              timestamp="2020 - 2022"
              subtitle="Ensino Médio"
              title="ETEC Professor José Ignácio Azevedo Filho"
            />
          </Timeline>
        </motion.div>

        {/* Bloco 2 - Experiência (entrada da direita) */}
        <motion.div
          className="experiencia-item"
          variants={containerVariantsRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Timeline>
            <TimelineItem
              timestamp="2024 - ATUAL"
              type="Aprendiz de Desenvolvimento de Sistemas"
              subtitle="Usina Alta Mogiana"
              description="Atualmente, sou jovem aprendiz na empresa Alta Mogiana, onde estou adquirindo experiência nos setores de Infraestrutura e Desenvolvimento. Durante esse período, estou aprendendo sobre processos internos, suporte técnico e áreas essenciais para o funcionamento da empresa. Essa experiência tem sido valiosa para o desenvolvimento da minha carreira em tecnologia."
            />
            <TimelineItem className="sem" />
          </Timeline>
        </motion.div>
      </div>
    </main>
  );
}
