import React from "react";
import "./div8.css";

function Div8() {
  return(
    <div id="contactUs" className="div8-content">
        <div className="grid-container">
          <div className="flex-container flex-imgs">
            <img height='100px' src="./../../../resources/images/acm logo white.png" alt="acm logo" />
            <img height='100px' src="./../../../resources/images/uet_logo.png" alt="uet logo" />
          </div>
          <div className="flex-container flex-contacts">
            <div className="grid-container">
              <strong>Supervisor</strong>
              <p>+923454295624</p>
            </div>
            <div className="grid-container">
              <strong>President</strong>
              <p>+923174689687</p>
            </div>
          </div>
          <div className="flex-container flex-links">
            <a target="blank" href="https://instagram.com/acmuetnewcampus?igshid=MzNlNGNkZWQ4Mg==" className="fa-brands fa-instagram"/>
            <a target="blank" href="https://www.facebook.com/acmuetnewcampus?mibextid=ZbWKwL" className="fa-brands fa-facebook"/>
            <a target="blank" href="https://wa.me/+9203174689687" className="fa-brands fa-whatsapp"/>
            <a target="blank" href="https://www.linkedin.com/company/acmuetnewcampus/" className="fa-brands fa-linkedin"/>
            <a target="blank" href="mailto:acmuetnewcampus@gmail.com" className="fa-regular fa-envelope"/>
          </div>
        </div>
        
    </div>
);
}

export default Div8;
