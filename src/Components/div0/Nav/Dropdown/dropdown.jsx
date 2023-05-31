import React, { useState } from "react";
import Li from "./li/li";
import './dropdown.css'

function Dropdown() {
  const [isClicked,setClicked] = useState(false);

  function handleClick(){
    setClicked(!isClicked);
  }
  return (
    <div className="parent">
      <a onClick={handleClick}
        className="nav-link text-light dropdown-toggle"
        href="#"
        role="button"
        aria-expanded="false"
        style={{color: "black"}}
      >
        About Us
      </a>
      {
        isClicked && <div className="grid-container child">
          <ul className="menu">
            <Li class="item" text="Collaborations" link="#services" />
            <Li class="item" text="Our Domain" link="#our-process" />
            <Li class="item" text="Our Values" link="#dl-values" />
            <Li class="item" text="Team" link="#methodologies" />
          </ul>
        </div>
      }
    </div>
  );
}

export default Dropdown;
