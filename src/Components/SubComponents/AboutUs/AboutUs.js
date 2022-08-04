
import React, {useContext} from 'react';
import {Routes, Route} from "react-router-dom"
import {ThemeContext} from "../../Context/ThemeContext"
import AboutUsContent from "./AboutUsContent"


function AboutUs(props) {
    const {theme} = useContext(ThemeContext)
    return (
      <div>
        <div data_theme={theme}>
            <Routes>
                <Route path="/" element={<AboutUsContent/>}/>
            </Routes>
          </div>
        </div>
    );
}

export default AboutUs;