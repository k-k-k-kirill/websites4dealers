import React from "react";
import "./Centered.scss";

interface CenteredProps {
  children: any;
}

const Centered: React.FC<CenteredProps> = ({ children }) => (
  <div className="layout-centered">{children}</div>
);

export default Centered;
