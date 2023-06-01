import React from "react";
import P from "./../../div1/Para/P";

function Block(props) {
  return (
    <div style={{padding:'0% 5%', margin: '3% 0%'}}>
      <img src={props.src} width="50px" height="50px" />
      <h5>{props.title}</h5>
      <P style={{fontSize:'14px',textAlign:'justify'}} content={props.content} />
      {props.list}
    </div>
  );
}

export default Block;
