import React from "react";
import "./logo-styles.scss";
import gengarImg from "./gengar.png";

const Logo: React.FC = () => {
  return (
    <div className="logoWrapper">
      <img src={gengarImg} alt="Gengar smiling" />
    </div>
  );
};

export default Logo;
