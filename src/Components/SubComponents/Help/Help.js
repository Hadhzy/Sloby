import React from 'react';
import {Routes, Route } from "react-router-dom"
import Forum from "./Forum/Forum"
import HelpContent from "./SubComponents/HelpContent"
function Help(props) {
    return (
        <div className="content-base">
            <Routes>
                <Route path="/" element={<HelpContent/>}/>
                <Route path="forum" element={<Forum/>}/>
                <Route path="email" element={<p>email</p>}/>
                <Route path="community" element={<p>community</p>}/>
            </Routes>

        </div>
    );
}

export default Help;