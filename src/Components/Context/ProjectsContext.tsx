import React, { createContext,  useReducer, useEffect } from "react"
import { v4 as uuidv4 } from "uuid";
import { projectReducers } from "./reducers/reducerFunctions/projectReducer";
import { ContextChildren, IProjectsContext, ProjectState } from "../../types/interfaces";

/**
 * @description - This context is for the project creating. as you can see we are uploading datas to localStorage.
 * This is regular react-redux working. You can access more information on our github. Make sure that you're in the right folder.
 * @param {Array} projects - This is an array and contains all of the projects. We define it initially as an empty array
*/

type reducerFunction = typeof projectReducers

const initialState = [
    {
        name: "",
        description: "", 
        projectType: "",
        id: uuidv4(),
    }
]


export const ProjectsContext = createContext<IProjectsContext>(undefined!)

export const ProjectsContextProvider = ({children}: ContextChildren) => {
    const [projects, dispatch] = useReducer<reducerFunction, ProjectState[]>(projectReducers, initialState, () => {
        const localData = localStorage.getItem('projects')
        return localData ? JSON.parse(localData) : []
    })


    useEffect(() => {
        localStorage.setItem("projects", JSON.stringify(projects))
    }, [projects])

    return(
        <ProjectsContext.Provider value={{ projects, dispatch}}>
            {children}
        </ProjectsContext.Provider>
    )
}

export default ProjectsContextProvider