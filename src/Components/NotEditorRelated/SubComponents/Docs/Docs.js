import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom"
import Documentation from "./Documentation";
import {ThemeContext} from "../../Context/ThemeContext"

function Docs(props) {
    const {theme} = useContext(ThemeContext)
    return (
        <div data_theme={theme}>
            <Routes>
                <Route path="/" element={<Navigate to="see-right-now"/>}/>
                <Route path="download" element={<p>Download</p>}/>
                <Route path="see-right-now" element={<Documentation/>}/>
            </Routes>
        </div>
    );
}

export default Docs;