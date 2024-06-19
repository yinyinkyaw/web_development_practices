import FabButton from "@components/FabButton/FabButton.component";
import { ButtonHTMLAttributes } from "react";

import "./FabTriggerButton.styles.css";

interface FabTriggerButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isOpen: boolean;
}
const FabTriggerButton = ({
  children,
  isOpen,
  ...rest
}: FabTriggerButtonProps) => {
  return (
    <FabButton
      className="fab_trigger_button"
      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
      {...rest}
    >
      {children}
    </FabButton>
  );
};

export default FabTriggerButton;
