import React from 'react';
import "../App.css";
import freecodecamplogo from "../img/freecodecamp-logo.png";

const LogoFreeCodeCamp = () => {
  return (
    <div className="freecodecamp-logo-container">
      <img 
      src={freecodecamplogo} 
      className="freecodecamp-logo"
       />
    </div>
  );
};

export default LogoFreeCodeCamp;
