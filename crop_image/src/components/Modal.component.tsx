import PortalComponent from "./PortalComponent.component";
import clsx from "clsx";
import CloseIcon from "@assets/x.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalStyles?: string;
  popupTitle: string;
  children: React.ReactNode;
}

const Modal = ({
  isOpen,
  onClose,
  modalStyles,
  popupTitle,
  children,
}: ModalProps) => {
  return (
    isOpen && (
      <PortalComponent>
        <div className="w-screen h-screen fixed inset-0 bg-gray-100 flex items-center justify-center">
          <div
            className={clsx(
              "max-w-5xl w-full rounded-xl bg-white h-fit px-7 py-8 grid gap-8 shadow-xl",
              modalStyles
            )}
          >
            <div className="flex justify-between w-full items-center border-b-2 pb-3">
              <h4 className="text-3xl">{popupTitle}</h4>
              <button onClick={onClose}>
                <CloseIcon />
              </button>
            </div>
            {children}
          </div>
        </div>
      </PortalComponent>
    )
  );
};

export default Modal;
