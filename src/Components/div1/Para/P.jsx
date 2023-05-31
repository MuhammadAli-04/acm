import React from "react";
import "./P.css";

function P(props) {
  return <p style={props.style}>{props.content}</p>;
}

export default P;
