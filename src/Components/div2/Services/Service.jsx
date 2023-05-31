import React from "react";
import "./Service.css";

function Service(props) {
  return (
    <div className="grid-container">
      <img height='auto' width='auto'  src={props.src} alt={props.alt} style={{padding: "10px"}}/>
      <p style={{wordSpacing: "default", lineHeight: "17px", fontWeight: "normal", textAlign: "center", margin: "0 0 10px 10px"}}>{props.content}</p>
    </div>
  );
}

export default Service;
