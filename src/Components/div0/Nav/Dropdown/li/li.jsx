import React from "react";

function Li(props) {
  return (
    <li>
      <a className={props.class} href={props.link}>
        {props.text}
      </a>
    </li>
  );
}

export default Li;
