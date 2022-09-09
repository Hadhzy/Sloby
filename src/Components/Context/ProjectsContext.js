import React, { createContext,  useReducer, useEffect } from "react"
import { v4 as uuidv4 } from "uuid";
import { projectReducers } from "./reducers/projectReducer";

/**
 * @description - This context is for the project creating. as you can see we are uploading datas to localStorage.
 * This is regular react-redux working. You can access more information on our github. Make sure that you're in the right folder.
 * @param {Array} projects - This is an array and contains all of the projects. We define it initially as an empty array
*/



export const ProjectsContext = createContext(true)

export const ProjectsContextProvider = (props) => {
    const [projects, dispatch] = useReducer(projectReducers, [], () => {
        const localData = localStorage.getItem('projects')
        return localData ? JSON.parse(localData) : []
    })

    console.log(projects)

    useEffect(() => {
        localStorage.setItem("projects", JSON.stringify(projects))
    }, [projects])

    return(
        <ProjectsContext.Provider value={{  projects, dispatch}}>
            {props.children}
        </ProjectsContext.Provider>
    )
}

export default ProjectsContextProvider