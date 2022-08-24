import React, { createContext, useState } from "react"

export const ProjectsHandlerContext = createContext(true)

export const ProjectsHandlerContextProvider = (props) => {
    const [popup, setPopup] = useState(false)
    const [notification, setNotification] = useState(false)


    return(
        <ProjectsHandlerContext.Provider
           value={{ popup, setPopup, notification, setNotification }} 
        >
            {props.children}                
        </ProjectsHandlerContext.Provider>
    )
} 