import React, { ReactNode } from "react";
import "./Centered.scss";

interface CenteredProps {
  children: ReactNode;
}

const Centered: React.FC<CenteredProps> = ({ children }) => (
  <div className="layout-centered">{children}</div>
);

export default Centered;
