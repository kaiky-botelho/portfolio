import React from 'react';
import "./miniCard.css";

export default function MiniCard({ subTit, iconSrc }: { subTit: string; iconSrc: string }){
  return (
      <div className="mini-card">
        <img src={iconSrc} alt="Ícone" width={40} height={40} />
        <div className="mini-card-conteudo">
          <h3>{subTit}</h3>
        </div>
      </div>
  );
}