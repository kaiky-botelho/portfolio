
import IconButton from "../IconButton/iconButton";
import "./cardProjeto.css";

interface ButtonProps {
  href: string;
  iconSrc: string;
}

interface CardProjetoProps {
  titulo: string;
  imgSrc: string;
  imgAlt?: string;
  buttons?: ButtonProps[]; // Array de botões (opcional)
}

export default function CardProjeto({ titulo, imgSrc, imgAlt, buttons = [] }: CardProjetoProps) {
  return (
    <div className="card-projeto">
      <div className="card-img">
        <img src={imgSrc} alt={imgAlt} width={300} height={200} />
      </div>
      <h3 className="card-titulo">{titulo}</h3>
      <div className="card-buttons">
        {buttons.map((button, index) => (
          <IconButton key={index} href={button.href} iconSrc={button.iconSrc} />
        ))}
      </div>
    </div>
  );
}
