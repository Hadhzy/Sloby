import React from 'react';
import {Routes, Route} from "react-router-dom"

function OurProject(props) {
    return (
        <div className="content-base">
            <Routes>
                <Route path="/" element={<p>OurProject</p>}/>
            </Routes>
        </div>
    );
}

export default OurProject;