"use client";

import { useEffect } from "react";
import "./modalProjeto.css";
import IconTextButton from "../iconTextButton/iconTextButton";

interface ButtonProps {
    href: string;
    iconSrc: string;
    text: string;
}

interface ModalProjetoProps {
    isOpen: boolean;
    onClose: () => void;
    titulo: string;
    imgSrc: string;
    imgAlt?: string;
    descricaoCompleta: string;
    tecnologias: { nome: string; iconSrc: string }[];
    buttons?: ButtonProps[];
}

export default function ModalProjeto({
    isOpen,
    onClose,
    titulo,
    imgSrc,
    imgAlt = "Imagem do projeto",
    descricaoCompleta,
    tecnologias,
    buttons = [],
}: ModalProjetoProps) {
    // Prevenir scroll quando o modal está aberto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Fechar ao pressionar ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleEsc);
        }
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Fechar modal">
                    ✕
                </button>

                <div className="modal-image-container">
                    <img src={imgSrc} alt={imgAlt} className="modal-image" />
                </div>

                <div className="modal-info">
                    <div className="modal-header">
                        <h3 className="modal-titulo">{titulo}</h3>
                    </div>

                    <div className="modal-body">
                        <div className="modal-section">
                            <h4>Sobre o Projeto</h4>
                            <p className="modal-descricao">{descricaoCompleta}</p>
                        </div>

                        <div className="modal-section">
                            <h4>Tecnologias Utilizadas</h4>
                            <div className="modal-tecnologias">
                                {tecnologias.map((tec, index) => (
                                    <div key={index} className="tecnologia-item">
                                        <img src={tec.iconSrc} alt={tec.nome} width={32} height={32} />
                                        <span>{tec.nome}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {buttons.length > 0 && (
                            <div className="modal-section">
                                <h4>Links do Projeto</h4>
                                <div className="modal-buttons">
                                    {buttons.map((button, index) => (
                                        <IconTextButton
                                            key={index}
                                            href={button.href}
                                            imgIconSrc={button.iconSrc}
                                            text={button.text}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
