import React from "react";
import Heading from "../div1/Heading/Heading";
import P from "../div1/Para/P";
import Services from "./Services/Services";
import "./div2.css";

function Div2() {
  return (
    <div id="services" className="div2">
      <div className="heading">
        <Heading style={{ color: "#05192D" }} content="RECENT COLLABORATONS" />
        <P content="Our Technology Consulting focuses on delivering solutions across the following critical business areas:" />
      </div>
      <div className="flex-container">
        <div className="grid-container">
          <img height='auto' width='150px'  src='../../../../resources/div2/DATACAMP.png' style={{padding: "10px"}}/>
          <p style={{wordSpacing: "default", lineHeight: "17px", fontWeight: "normal", textAlign: "center", margin: "0 0 10px 10px"}}>Datacamp Donates</p>
        </div>
        <div className="grid-container ">
          <img height='auto' width='100px'  src='../../../../resources/div2/CONGENT.png' style={{padding: "10px"}}/>
          <p style={{wordSpacing: "default", lineHeight: "17px", fontWeight: "normal", textAlign: "center", margin: "0 0 10px 10px"}}>Congent Labs</p>
        </div>
        <div className="grid-container">
          <img height='auto' width='100px'  src='../../../../resources/div2/CURE MD.png' style={{padding: "10px"}}/>
          <p style={{wordSpacing: "default", lineHeight: "17px", fontWeight: "normal", textAlign: "center", margin: "0 0 10px 10px"}}>CureMD</p>
        </div>
      </div>
      <div className="flex-container">
        <div className="grid-container">
        <img height='auto' width='80px'  src='../../../../resources/div2/TECHNOSOFT.png' style={{padding: "10px"}}/>
        <p style={{wordSpacing: "default", lineHeight: "17px", fontWeight: "normal", textAlign: "center", margin: "0 0 10px 10px"}}>Technosoft</p>
      </div>
      <div className="grid-container">
        <img height='auto' width='95px'  src='../../../../resources/div2/I2C.png' style={{padding: "10px"}}/>
        <p style={{wordSpacing: "default", lineHeight: "17px", fontWeight: "normal", textAlign: "center", margin: "0 0 10px 10px"}}>i2c</p>
      </div>
      <div className="grid-container">
        <img height='auto' width='130px'  src='../../../../resources/div2/MLSA UET Lahore.png' style={{padding: "10px"}}/>
        <p style={{wordSpacing: "default", lineHeight: "17px", fontWeight: "normal", textAlign: "center", margin: "0 0 10px 10px"}}>MLSA UET Lahore</p>
      </div>
      </div>
    </div>
  );
}

export default Div2;
