import React, {useContext, useEffect} from "react"
import { ProjectsContext } from "../../store/Projects/ProjectsContext"
import { toast, ToastContainer } from 'react-toastify'
import ProjectsDetails from "./ProjectsDetails"
import { ProjectsHandlerContext } from "../../store/Projects/ProjectsHandlerContext"
import { Outlet } from "react-router-dom"


const ProjectsContainer = () => {
    const { notification } = useContext(ProjectsHandlerContext)    
    const {projects} = useContext(ProjectsContext)
    
    
    
    const OptionalFreeTime = () => {
        return (
            <div className="optional-container">
                No Projects Hello FreeTime
            </div>
        )
    }
    
    
    return(
        <div className='project-renderer-container'>
                {
                    projects?.length ? (
                       <div className="projects-container">
                           {projects.map(project => {
                                return <ProjectsDetails project={project} key={project.id}/>
                           })} 
                       </div> 
                    ) : (
                        <OptionalFreeTime />
                    )
                }
        </div>
    )
}


export default ProjectsContainer