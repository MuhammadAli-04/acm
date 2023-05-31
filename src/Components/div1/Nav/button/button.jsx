import React from "react";
import "./button.css";

function Button() {
  return (
    <div className="button">
      <div className="front">Want to Collaborate?</div>
      <a href="#contactUs" className="back">
        Let's work together
      </a>
    </div>
  );
}

export default Button;
