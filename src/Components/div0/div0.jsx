import React from "react";
import "./div0.css";
import Nav from './Nav/Nav';


function Div0(){
    return (
        <div className="div0">
            <Nav/>
            <div className="flex-container">
                <p style={{ textAlign:"center",color:'white',fontSize:'20px'}}>
                    <strong>ACM UET NC</strong> empowers students in computer science through workshops, boot camps, and projects, fostering collaboration and innovation. Their outreach programs inspire the next generation and break technological barriers. With a vision for positive change, they welcome all skill levels to join their inclusive community dedicated to transforming lives through technology.
                </p>
            </div>
        </div>
    );
}

export default Div0;