import React from "react";
import Heading from './../div1/Heading/Heading';
import Process from "./process/process";
import processes from './process/processes';
import './div4.css';

function Div4(){
    return (
        <div id="our-process" className="div4">
            <Heading style={{textAlign:'center',color:'white',fontWeight:'700'}} content='DOMAINS' />
            <div className="processes">
                <div className="process">
                    <div className="col-1-of-6" style={{textAlign:'left',margin:'auto 0'}}>PUBLIC RELATIONS</div>
                    <div className="col-5-of-6">
                        <div className="col-4-of-5" style={{margin:'auto 0'}}>
                        Cultivating trust through strategic communication and transparent engagement, forging lasting connections within our esteemed community.
                        </div>
                        <div className="col-1-by-2-of-5 grid-container">
                            <i className='fa-solid fa-people-group fa-2xl' ></i>
                        </div>
                    </div>
                </div>

                <div className="process">
                    <div className="col-1-of-6" style={{textAlign:'left',margin:'auto 0'}}>MEMBERSHIP</div>
                    <div className="col-5-of-6">
                        <div className="col-4-of-5" style={{margin:'auto 0'}}>
                        Exclusive access to tailored resources, networking, and curated events, propelling professional growth within our thriving community.
                        </div>
                        <div className="col-1-by-2-of-5 grid-container">
                            <i className='fa-solid fa-id-card-clip fa-2xl' ></i>
                        </div>
                    </div>
                </div>

                <div className="process">
                    <div className="col-1-of-6" style={{textAlign:'left',margin:'auto 0'}}>GRAPHIC DESIGNING</div>
                    <div className="col-5-of-6">
                        <div className="col-4-of-5" style={{margin:'auto 0'}}>
                        Radiating a captivating brand identity, our talented team crafts visually striking designs that leave a lasting impact.
                        </div>
                        <div className="col-1-by-2-of-5 grid-container">
                            <img height='32px' src="./../../../resources/images/graphic designing.png"/>
                        </div>
                    </div>
                </div>

                <div className="process">
                    <div className="col-1-of-6" style={{textAlign:'left',margin:'auto 0'}}>EVENT MANAGEMENT</div>
                    <div className="col-5-of-6">
                        <div className="col-4-of-5" style={{margin:'auto 0'}}>
                        Meticulously orchestrated experiences that seamlessly blend entertainment and professional enrichment, creating unforgettable affairs within our community.
                        </div>
                        <div className="col-1-by-2-of-5 grid-container">
                            <img height='32px' src="./../../../resources/images/event management.png" />
                        </div>
                    </div>
                </div>

                <div className="process">
                    <div className="col-1-of-6" style={{textAlign:'left',margin:'auto 0'}}>TECHNICAL SKILLS</div>
                    <div className="col-5-of-6">
                        <div className="col-4-of-5" style={{margin:'auto 0'}}>
                        Empowering members to excel with cutting-edge resources, comprehensive training, and a dynamic environment fostering technical expertise and innovation.
                        </div>
                        <div className="col-1-by-2-of-5 grid-container">
                            <img height='32px' src="./../../../resources/images/skills.png" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Div4;