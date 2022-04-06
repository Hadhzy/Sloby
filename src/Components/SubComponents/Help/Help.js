import React from 'react';
import {Routes, Route } from "react-router-dom"
import Forum from "./Forum/Forum"
function Help(props) {
    return (
        <div className="content-base">
            <Routes>
                <Route path="/" element={<p>Test2</p>}/>
                <Route path="Forum" element={<Forum/>}/>
            </Routes>

        </div>
    );
}

export default Help;