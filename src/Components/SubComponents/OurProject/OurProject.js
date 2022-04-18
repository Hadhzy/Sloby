import React from 'react';
import {Routes, Route} from "react-router-dom"
import GoalContent from "./GoalContent"
import Throw_A_MessageContent from "./Throw_A_MessageContent";
import OurProjectContent from "./OurProjectContent"
function OurProject(props) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<OurProjectContent/>}/>
                <Route path="goal" element={<GoalContent/>}/>
                <Route path="throw-a-message" element={<Throw_A_MessageContent/>}/>
            </Routes>
        </div>
    );
}

export default OurProject;