import "./FabWrapper.styles.css";
import FabTriggerButton from "@components/FabTriggerButton/FabTriggerButton.component";
import AddIcon from "@icons/add.svg";
import { Dispatch } from "react";
type FabWrapperProps = {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: Dispatch<React.SetStateAction<boolean>>;
};

const FabWrapper = ({ children, open, onOpenChange }: FabWrapperProps) => {
  return (
    <div className="fab_wrapper">
      <FabTriggerButton
        isOpen={open}
        onClick={() => onOpenChange((prev) => !prev)}
      >
        <AddIcon />
      </FabTriggerButton>
      {open && children}
    </div>
  );
};

export default FabWrapper;
