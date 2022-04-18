import React from 'react'
import closeIcon from "../../../../../src/icons/closeIcon.png"
import onlineIcon from "../../../../../src/icons/onlineIcon.png"
import {Link} from "react-router-dom";

const InfoBar = ({room}) => (
   <div className="info-bar">
       <div className="left-inner-container">
            <img className="online-icon" alt="onlineIcon" src={onlineIcon}/>
            <h3>{room}</h3>
       </div>
       <div className="right-inner-container">
       <Link to="/">
            <img src={closeIcon} alt="closeIcon" />
       </Link>
       </div>
   </div> 

)
export default InfoBar