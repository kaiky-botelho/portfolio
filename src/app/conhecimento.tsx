"use client";

import { motion } from "framer-motion";
import '../styles/global.css';
import "../styles/conhecicimento.css";
import MiniCard from '@/components/miniCard/miniCard';

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: i * 0.2, // Adiciona um pequeno atraso para cada card
        }
    })
};

export default function Conhecimento() {   
    const conhecimentos = [
        { subTit: 'html', iconSrc: '../assets/icones/html.png' },
        { subTit: 'css', iconSrc: '../assets/icones/css.png' },
        { subTit: 'js', iconSrc: '../assets/icones/js.png' },
        { subTit: 'react', iconSrc: '../assets/icones/react.png' },
        { subTit: 'figma', iconSrc: '../assets/icones/figma.png' },
        { subTit: 'adobe xd', iconSrc: '../assets/icones/adobe.png' },
    ];

    return (
        <main className='conhecimento container'>
            <motion.h2 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Conhecimento<span>.</span>
            </motion.h2>
            
            <div className="conhecimento-cards">
                {conhecimentos.map((item, index) => (
                    <motion.div 
                        key={item.subTit}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={index} // Passa o índice para a animação
                    >
                        <MiniCard subTit={item.subTit} iconSrc={item.iconSrc} />
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
