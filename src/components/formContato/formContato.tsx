"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "./formContato.css";

export default function FormContato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // Suas credenciais do EmailJS
    const serviceId = "service_10pzof9";
    const templateId = "template_nocovzj";
    const publicKey = "RprZvPdHuBgvXmroU";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.nome,
          from_email: formData.email,
          subject: formData.assunto,
          message: formData.mensagem,
        },
        publicKey
      );

      setStatus("success");
      setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
      
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("❌ Erro ao enviar email:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="form-contato-container">
      <h3>📨 Envie uma Mensagem</h3>
      <p className="form-subtitle">
        Preencha o formulário abaixo e entrarei em contato o mais breve possível
      </p>

      <form onSubmit={handleSubmit} className="form-contato">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nome">Nome *</label>
            <input
              type="text"
              id="nome"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              required
              placeholder="Seu nome completo"
              disabled={status === "sending"}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="seu@email.com"
              disabled={status === "sending"}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="assunto">Assunto *</label>
          <input
            type="text"
            id="assunto"
            value={formData.assunto}
            onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
            required
            placeholder="Sobre o que você quer falar?"
            disabled={status === "sending"}
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensagem">Mensagem *</label>
          <textarea
            id="mensagem"
            rows={6}
            value={formData.mensagem}
            onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
            required
            placeholder="Digite sua mensagem aqui..."
            disabled={status === "sending"}
          />
        </div>

        <button type="submit" className="btn-enviar" disabled={status === "sending"}>
          {status === "sending" ? "Enviando..." : "Enviar Mensagem"}
        </button>

        {status === "success" && (
          <div className="form-message success">
            ✅ Mensagem enviada com sucesso! Retornarei em breve.
          </div>
        )}

        {status === "error" && (
          <div className="form-message error">
            ❌ Erro ao enviar mensagem. Verifique se o EmailJS foi configurado corretamente (veja CONFIGURAR_EMAILJS.md) ou entre em contato diretamente pelo email.
          </div>
        )}
      </form>
    </div>
  );
}
