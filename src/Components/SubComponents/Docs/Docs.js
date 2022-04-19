import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom"
import Documentation from "./Documentation";
function Docs(props) {
    return (
        <div className="content-base">
            <Routes>
                <Route path="/" element={<Navigate to="see-right-now"/>}/>
                <Route path="download" element={<p>Download</p>}/>
                <Route path="see-right-now" element={<Documentation/>}/>
            </Routes>
        </div>
    );
}

export default Docs;