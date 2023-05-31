import React from "react";
import Heading from './../div1/Heading/Heading';
import './div7.css';


function Div7(){
    return (
        <div id='contactUs' className="div7">
            <Heading style={{color:'#05192D',textAlign:'center',marginBottom:'5%'}} content='Contact Us'/>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="mb-3 flex-container">
                            
                            <div className="mx-3">
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Your Name" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mx-3">
                                <input type="number" maxLength='11' className="form-control" id="exampleInputEmail2" placeholder="Your Contact No." aria-describedby="emailHelp"/>
                            </div>
                            <div className="mx-3">
                                <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Your email" aria-describedby="emailHelp"/>
                            </div>
                        
                        
                        </div>
                        <div className="mb-3">
                            <div className="mx-3">
                                <textarea className="form-control" placeholder="Your message..." rows = '4' aria-label="With textarea"/>
                            </div>
                        </div>
                        <div className="mx-3">
                            <button type="submit" className="btn btn-color">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Div7;