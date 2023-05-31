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
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{color: "black"}}
      >
        About Us
      </a>
      {
        isClicked && <div className="grid-container child">
          <ul className="menu">
            <Li class="item" text="IT Services" link="#services" />
            <Li class="item" text="Our Process" link="#our-process" />
            <Li class="item" text="DataLabb Values" link="#dl-values" />
            <Li class="item" text="Methodologies" link="#methodologies" />
          </ul>
        </div>
      }
    </div>
  );
}

export default Dropdown;
