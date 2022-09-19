import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom"

import GoalContent from "./GoalContent"
import OurProjectContent from "./OurProjectContent"
import {ThemeContext} from "../../Context/ThemeContext"
function OurProject() {
    const {theme} = useContext(ThemeContext)
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="goal"/>}/>
                <Route path="goal" element={<GoalContent/>}/>
            </Routes>
        </div>
    );
}

export default OurProject;