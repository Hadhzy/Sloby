import React from 'react';
import {Routes, Route} from "react-router-dom"

function Docs(props) {
    return (
        <div className="content-base">
            <Routes>
                <Route path="/" element={<p>Docs</p>}/>
            </Routes>
        </div>
    );
}

export default Docs;