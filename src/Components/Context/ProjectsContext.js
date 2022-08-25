import React, { createContext,  useReducer, useEffect } from "react"
import { v4 as uuidv4 } from "uuid";
import { projectReducers } from "./reducers/projectReducer";

export const ProjectsContext = createContext(true)

export const ProjectsContextProvider = (props) => {
    const [projects, dispatch] = useReducer(projectReducers, [], () => {
        const localData = localStorage.getItem('projects')
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem("projects", JSON.stringify(projects))
        console.log(localStorage)
    }, [projects])

    return(
        <ProjectsContext.Provider value={{  projects, dispatch}}>
            {props.children}
        </ProjectsContext.Provider>
    )
}

export default ProjectsContextProvider