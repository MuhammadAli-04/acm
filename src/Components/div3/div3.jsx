import React from "react";
import Heading from "./../div1/Heading/Heading";
import P from "./../div1/Para/P";
import "./div3.css";

function Div3() {
  return (
    <div className="div3">
      <Heading style={{ }} content="What We Do" />
      <P
        style={{ fontStyle: "italic", width: "70%", textAlign: "center" }}
        content="We try to cater almost all kinds of I.T and computer related services. We believe that our strength is our customer satisfaction. Thus, more success for us! We achieve this by"
      />
      <P
        style={{ textAlign: "center" }}
        content="See everything as end consumer Keep the technical eye always open"
      />
      <P
        style={{ textAlign: "center" }}
        content="Constant feedback and collaboration with client"
      />
      <P
        style={{ textAlign: "center" }}
        content="Good communication and technical skills"
      />
    </div>
  );
}

export default Div3;
