import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalComponentProps {
  children: React.ReactNode;
}
const PortalComponent = ({ children }: PortalComponentProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted && createPortal(children, document.body);
};

export default PortalComponent;
