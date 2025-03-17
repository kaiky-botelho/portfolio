import { ComponentProps } from "react";
import './textButton.css';

interface TextButtonProps extends ComponentProps<'button'> {
  href?: string;
}

export default function TextButton({ children, href, ...props }: TextButtonProps) {
  return (
    <button className="textButton" {...props}>
      <a href={href}>{children}</a> 
    </button>
  );
}
