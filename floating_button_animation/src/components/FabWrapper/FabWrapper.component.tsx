import "./FabWrapper.styles.css";
import FabButton from "@components/FabButton/FabButton.component";
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
      <FabButton
        className="float_button"
        onClick={() => onOpenChange((prev) => !prev)}
      >
        <AddIcon />
      </FabButton>
      {open && children}
    </div>
  );
};

export default FabWrapper;
