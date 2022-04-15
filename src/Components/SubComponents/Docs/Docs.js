import React from 'react';
import {Routes, Route} from "react-router-dom"

function Docs(props) {
    return (
        <div className="content-base">
            <Routes>
                <Route path="/" element={<p>Docs</p>}/>
                <Route path="download" element={<p>Download</p>}/>
                <Route path="see-right-now" element={<p>See right now</p>}/>
            </Routes>
        </div>
    );
}

export default Docs;