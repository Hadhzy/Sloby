import React from 'react';
import {Routes, Route} from "react-router-dom"

function AboutUs(props) {
    return (
        <div className="content-base">
            <Routes>
                <Route path="/" element={<p>About Us</p>}/>
            </Routes>
        </div>
    );
}

export default AboutUs;