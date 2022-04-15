import React from 'react';
import {Routes, Route} from "react-router-dom"
import GoalContent from "./GoalContent"
import Throw_A_MessageContent from "./Throw_A_MessageContent";
function OurProject(props) {
    return (
        <div className="content-base">
            <Routes>
                <Route path="/" element={<p>OurProject</p>}/>
                <Route path="goal" element={<GoalContent/>}/>
                <Route path="throw-a-message" element={<Throw_A_MessageContent/>}/>
            </Routes>
        </div>
    );
}

export default OurProject;