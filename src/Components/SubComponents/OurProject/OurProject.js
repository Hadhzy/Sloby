import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom"

import GoalContent from "./GoalContent"
import Throw_A_MessageContent from "./Throw_A_MessageContent";
import OurProjectContent from "./OurProjectContent"
import {ThemeContext} from "../../Context/ThemeContext"
function OurProject(props) {
    const {theme} = useContext(ThemeContext)
    return (
        <div data_theme={theme}>
            <Routes>
                <Route path="/" element={<Navigate to="goal"/>}/>
                <Route path="goal" element={<GoalContent/>}/>
                <Route path="throw-a-message" element={<Throw_A_MessageContent/>}/>
            </Routes>
        </div>
    );
}

export default OurProject;