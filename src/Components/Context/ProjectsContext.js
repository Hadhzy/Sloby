import React, { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid";

export const ProjectsContext = createContext(true)

export const ProjectsContextProvider = (props) => {
    const [projects, setProjects] = useState([
        {name: "React Application", id: 1},
        {name: "Moblie Application", id: 1},
    ])

    const addProject = (name) => {
        setProjects([...projects, {name, id: uuidv4() }])
    }

    const removeProject = (id) => {
        setProjects(projects.filter(project => project.id !== id))
    }
    return(
        <ProjectsContext.Provider value={{  projects, addProject, removeProject}}>
            {props.children}
        </ProjectsContext.Provider>
    )
}

export default ProjectsContextProvider