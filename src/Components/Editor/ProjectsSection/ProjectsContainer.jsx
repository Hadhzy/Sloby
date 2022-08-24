import React, {useContext, useEffect} from "react"
import { ProjectsContext } from "../../Context/ProjectsContext"
import { toast, ToastContainer } from 'react-toastify'
import ProjectsDetails from "./ProjectsDetails"
import { ProjectsHandlerContext } from "../../Context/ProjectsHandlerContext"



const ProjectsContainer = () => {
    const {projects} = useContext(ProjectsContext)
    const { notification } = useContext(ProjectsHandlerContext)    

    const NotificationAlert = () => {
        useEffect(() => {
           toast.success("Success") 
        }, [])


        return (
           <div className='notification-alert-container'>
                <ToastContainer theme="dark" />
           </div>
        )

    }


    const OptionalFreeTime = () => {
        return (
            <div className="optional-container">
                {projects.length}
            </div>
        )
    }


    return(
        <div className='project-creator-container'>
            {notification && <NotificationAlert />}
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