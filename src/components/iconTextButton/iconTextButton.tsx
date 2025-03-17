import { ComponentProps } from "react";
import './iconTextButton.css';

interface IconTextButtonProps extends ComponentProps<'button'> {
  href?: string;
  imgIconSrc: string;
  text?: string;
}

export default function IconTextButton({ href, imgIconSrc, text, ...props }: IconTextButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" >
      <button className="iconTxtButton" {...props}>
        <img src={imgIconSrc} alt="" width={20} />
        {text && <span>{text}</span>}
      </button>
    </a>
  );
}
