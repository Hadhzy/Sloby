import React, {useContext} from 'react';
import {ThemeContext} from "../../Context/ThemeContext"

function Community(props) {
    const {theme} = useContext(ThemeContext)
    return (
      <div data_theme={theme}>
        <div className="community-container">
             <div className="title-base">
                  Community
             </div>
            <div className="underline bigger-line"></div>
            <div className="subtitle-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum facilis hic laborum, magni minus nam ullam? Animi nisi rem totam?
            </div>
          </div>
        </div>
    );
}

export default Community;