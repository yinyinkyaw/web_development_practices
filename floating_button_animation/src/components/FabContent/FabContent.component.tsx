import React from "react";

interface FabContentProps {
  children: React.ReactNode;
  isOpen: boolean;
}

import "./FabContent.styles.css";

const FabContent = ({ children }: FabContentProps) => {
  return <div className="fab_content">{children}</div>;
};

export default FabContent;
