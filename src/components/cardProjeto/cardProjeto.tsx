import IconTextButton from "../iconTextButton/iconTextButton";
import "./cardProjeto.css";

interface ButtonProps {
  href: string;
  iconSrc: string;
  text: string;
}

interface CardProjetoProps {
  titulo: string;
  imgSrc: string;
  imgAlt?: string;
  buttons?: ButtonProps[];
  iconesSrc: string[];
  descricao: string;
}

export default function CardProjeto({ titulo, imgSrc, imgAlt, buttons = [], iconesSrc, descricao }: CardProjetoProps) {
  return (
    <div className="card-projeto">
      <div className="card-img">
        <img src={imgSrc} alt={imgAlt} width={300} height={200} />
      </div>
      <div className="card-tec-tit">
        <h3 className="card-titulo">{titulo}</h3>
        <div className="card-icones">
          {iconesSrc.map((icone, index) => (
            <img key={index} src={icone} alt="" width={25} height={25} />
          ))}
        </div>
      </div>
      <p className="card-descricao">{descricao}</p>
      <div className="card-buttons">
        {buttons.map((button, index) => (
          <IconTextButton key={index} href={button.href} imgIconSrc={button.iconSrc} text={button.text} />
        ))}
      </div>
    </div>
  );
}
