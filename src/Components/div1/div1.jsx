import React from "react";
import Heading from "./Heading/Heading";

import "./div1.css";

function Div1() {
  return (
    <div className="div1">
      <div className="flex-container mt-2">
        <div className="title">
          <Heading style={{ color: "white" }} content="LATEST COLLABORATION" />
          <br/>
          <br/>
          <h2 ><strong>ACM UET NC</strong> x <strong>DATA CAMP</strong></h2>
          <span>Transform </span><span style={{color:"#2FDF62"}}>everyone</span><span> in your organization through </span><span style={{color:"#2FDF62"}}>data science upskilling</span>
          <br /><br/>
          <p>Get <strong>1-year free subscription</strong> to our extended catalogue of <strong>+380 courses</strong> worth over <strong>$299 USD</strong> per license.</p>
          <p>Learn and get your <strong>Certification</strong>, showcase your skills with <strong>Workspace</strong> and start your new career journey with the <strong>Jobs</strong> portal.</p>
          
          <br/>
          <br/>
          <ul className="icons">
            <li>
              <i className="fa-brands fa-python fa-2xl"/>
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-terminal fa-2xl"/>
            </li>
            <li>
              <i className="fa-solid fa-database fa-2xl"></i>
            </li> 
            <li>
              <img height='32px' src="./../../../resources/images/sql-file-format-symbol.png"/>
            </li>
            <li>
              <img height='32px' src="./../../../resources/images/R lang.png" alt="" />
            </li>
          </ul>
        </div>
        <div className="img">
        <div className="colab">
            <img src="./../../../resources/images/acm logo white.png" height={'280px'} />
            <p style={{textAlign:"center",fontSize:'40px',fontWeight:'bold'}}>X</p>
            <img src="./../../../resources/images/datacamp1.png" height={'125px'} />
          </div>
        </div>
      </div>
      <br />
      <p
        style={{
          textAlign: "center",
          color: "white",
          margin: "-22px",
          fontStyle: "italic",
        }}
      >
        To learn more, email <span style={{color:'#2FDF62'}}> acmuetnewcampus@gmail.com</span> or visit <a style={{color:'#2FDF62'}} href='datacamp.com/donates '>datacamp.com/donates</a>
      </p>
      <br/>
    </div>
  );
}

export default Div1;
