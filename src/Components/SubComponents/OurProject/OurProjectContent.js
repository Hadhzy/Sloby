import React, {useContext} from 'react';
import {ContentContext} from "../../Context/ContentContext"

function OurProjectContent(props) {
    const {social_content} = useContext(ContentContext)
    return (
        <div className="content-base">
            {social_content.our_project.title}
        </div>
    );
}

export default OurProjectContent;