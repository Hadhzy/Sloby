import React, { createContext, useState } from "react"
import {IProjectHandlerContext, ContextChildren} from "../../interfaces"
/**
 * This is a basic context for the ProjectHandler states. 
 * We avoid props drilling, which means that we avoid consistently passing props through components, and rather have a context for it
 * @param {boolean} popup - This is gonna determine the visibility of the popup component
 * @param {boolean} notification - This is also gonna determine the visibility of the notification component. 
 */

export const ProjectsHandlerContext = createContext<
    IProjectHandlerContext
>(undefined!)

export const ProjectsHandlerContextProvider = ({children}: ContextChildren) => {
    const [popup, setPopup] = useState(false)
    const [notification, setNotification] = useState(false)


    return(
        <ProjectsHandlerContext.Provider
           value={{ popup, setPopup, notification, setNotification }} 
        >
            {children}                
        </ProjectsHandlerContext.Provider>
    )
} 