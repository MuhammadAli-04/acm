import React from "react";
import "./div5.css";
import Block from "./block/block";
import Li from './../div1/Nav/Dropdown/li/li';
import P from "../div1/Para/P";

function Div5() {
  return (
    <div id="dl-values" className="div5">
      <div className="col-2-of-3">
        <div className="flex-container">
            <Block src='./../../../resources/div5/features.png' title='Amazing Features' content='Try us for a minimum viable product and see the difference!' list=<ul><Li class='list-item' link='#' text='Low Cost!' /><Li class='list-item' link='#' text='Same local quality' /><Li class='list-item' link='#' text='Hardworking virtual team' /><Li class='list-item' link='#' text='Skilled project managers' /><Li class='list-item' link='#' text='24/7 support' /></ul> />
            <Block src='./../../../resources/div5/mission.png' title='Our Mission' content='To provide the utmost quality services and solutions to our clients and a dynamic and inventive environment for our employees to excel in the world of Information Technology.' list=''/>
          </div>
          <div className="flex-container">
            <Block src='./../../../resources/div5/quality.png' title='Quality, Delivery, Responsiveness, Price' content='We document our goals clearly on each of these crucial parameters and follow processes and standards to measure achievement continually and stay on target. There is no other way to go about it, is what each of us believes. Our high score on the customer appreciation index is a measure of how consistently we are able to deliver on these crucial parameters.' list=''/>
            <Block src='./../../../resources/div5/shield.png' title='Emphasis on Security' content='As systems become more complex and serve greater numbers of mobile/web users among an organization’s vendors, customers, employees and others, effective security becomes a rising challenge. We bring supreme expertise in secure IT networking to the service of your enterprise, combining proven methodologies and innovative technologies to match your exact needs.' list='' />
          </div>
      </div>
      <div className="col-1-of-3">
        <div className='values'>
          <h3>DataLabb Values</h3>
          <P style={{fontSize:'14px'}} content='DataLabb creates a purpose that is optimized to yourrequirements, Custom by default. Contrast this with one size fits all bundles sometimes promoted by companies that rely mainly on product sales. Because we are vendor-independent, we can select the best-fit solution to minimize your Total Cost of Ownership and maximize your Quality of Service.'/>
        </div>
      </div>
    </div>
  );
}

export default Div5;
