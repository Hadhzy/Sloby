import React, {useContext, useEffect} from "react"
import { ProjectsContext } from "../../Context/ProjectsContext"
import { toast, ToastContainer } from 'react-toastify'
import ProjectsDetails from "./ProjectsDetails"
import { ProjectsHandlerContext } from "../../Context/ProjectsHandlerContext"



const ProjectsContainer = () => {
    const {projects} = useContext(ProjectsContext)
    const { notification } = useContext(ProjectsHandlerContext)    



    const OptionalFreeTime = () => {
        return (
            <div className="optional-container">
                No Projects Hello FreeTime
            </div>
        )
    }


    return(
        <div className='project-creator-container'>
                {
                    projects.length ? (
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