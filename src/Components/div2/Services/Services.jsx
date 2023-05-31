import React from "react";
import Service from "./Service";
import imgs from './source';

function Services() {

  let resources = [];
 
  for(let i =0;i<Math.ceil(imgs.length/6);i++){
    resources.push(imgs.splice(i*3,i*3+3));
  }
  resources.push(imgs);

  return (
    <div className="services">
      {
        resources.map((el,ind)=>(<div key={ind} className="flex-container" style={{marginTop: "10px", marginBottom: "40px"}}>
        {el.map((ele,index)=>(<Service key={index} src={ele.src} alt={ele.alt} content={ele.content} className={`service-${index}`}/>))}

    </div>
    ))
    }
    </div>
  );
}

export default Services;
