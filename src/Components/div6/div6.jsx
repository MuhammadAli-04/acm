import React from "react";
import Heading from "./../div1/Heading/Heading";
import P from "./../div1/Para/P";
import Icon from "./icons/icons";
import "./div6.css";

function Div6() {
  return (
    <div id="methodologies" className="div6">
      {/* <div className="bg-1"></div>
      <div className="bg-2"></div>
      <div className="bg-3"></div> */}
      <Heading
        style={{
          fontStyle: "italic",
          display: "inline-block",
          zIndex: "2",
          color:'white'
        }}
        content="ADVISOR & HEIRACHY"
      />
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" style={{height:'100%',width:'100%',color:'white',fontSize:'25px',zIndex:'999'}}>
          <div className="carousel-item active">
            <div style={{height:'200px'}}>
            <p style={{padding:'0 15%'}}>"ACM society's aim is to foster a vibrant community of computer scientists and technologists who drive advancements in research, education, and industry. We strive to be the catalyst for collaboration, knowledge exchange, and professional growth. Our vision is to promote the highest standards of ethical computing, embrace diversity, and empower our members to make a positive impact on society through their work. Together, we will push the boundaries of innovation, explore emerging technologies, and shape the future of computing. Let us unite in our pursuit of excellence and make a lasting contribution to the world through ACM."</p>
            </div>
          </div>
          <div className="carousel-item">
            <div style={{height:'200px'}}>
              <p>"ACM society's aim is to foster a vibrant community of computer scientists and technologists who drive advancements in research, education, and industry. We strive to be the catalyst for collaboration, knowledge exchange, and professional growth. Our vision is to promote the highest standards of ethical computing, embrace diversity, and empower our members to make a positive impact on society through their work. Together, we will push the boundaries of innovation, explore emerging technologies, and shape the future of computing. Let us unite in our pursuit of excellence and make a lasting contribution to the world through ACM."</p>
            </div>
          </div>
        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </div>
  );
}

export default Div6;