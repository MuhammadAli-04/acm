import React from "react";
import './process.css';


function Process(props){
    return (
        <div className="process">
            <div className="col-1-of-6" style={{textAlign:'left',margin:'auto 0'}}>{props.title}</div>
            <div className="col-5-of-6">
                <div className="col-4-of-5" style={{margin:'auto 0'}}>
                    {props.content}
                </div>
                <div className="col-1-by-2-of-5 grid-container">
                    <i className={props.src} ></i>
                </div>
            </div>
        </div>
    )
}

export default Process;