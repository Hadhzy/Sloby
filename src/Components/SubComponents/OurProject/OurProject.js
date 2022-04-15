import React from 'react';
import {Routes, Route} from "react-router-dom"

function OurProject(props) {
    return (
        <div className="content-base">
            <Routes>
                <Route path="/" element={<p>OurProject</p>}/>
                <Route path="goal" element={<p>Goal</p>}/>
                <Route path="throw-a-message" element={<p>Throw a message</p>}/>
            </Routes>
        </div>
    );
}

export default OurProject;