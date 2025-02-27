import { ComponentProps } from "react";
import './textButton.css';

interface TextButtonProps extends ComponentProps<'button'> {}

export default function TextButton({ children, ...props }: TextButtonProps) {
  return (
    <button {...props}>
      {children} 
    </button>
  );
}
