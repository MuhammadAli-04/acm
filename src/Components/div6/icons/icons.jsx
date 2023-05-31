import React from 'react';
import './icons.css';

function Icon(props){
    return (
        <div className="icon">
            <img className="icon1" src={props.src}/>
            {/* <img className="icon2" src={props.src}/> */}
        </div>
    )
}
export default Icon;