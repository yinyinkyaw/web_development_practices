import { ButtonHTMLAttributes } from "react";
import "./FabButton.styles.css";

interface FabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const FabButton = ({ children, className = "", ...rest }: FabButtonProps) => {
  return (
    <button className={`fab_button ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default FabButton;
