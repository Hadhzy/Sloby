import React from 'react';
import {Routes, Route } from "react-router-dom"
import Forum from "./Forum/Forum"
import HelpContent from "./SubComponents/HelpContent"
import Community from "./Community"
function Help(props) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HelpContent/>}/>
                <Route path="forum" element={<Forum/>}/>
                <Route path="community" element={<Community />}/> 
            </Routes>
        </div>
    );
}

export default Help;