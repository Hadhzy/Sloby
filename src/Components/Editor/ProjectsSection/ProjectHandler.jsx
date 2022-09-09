import React, {useContext, useState, useEfffect, useEffect} from 'react'
import SearchBar from "./SearchBar"
import SideMenuBar from './SideMenuBar'
import ProjectsList from "./ProjectsList"
import NewProjectPopup from './NewProjectPopup'
import {ProjectsHandlerContext} from '../../Context/ProjectsHandlerContext'
import { toast, ToastContainer } from 'react-toastify'

function ProjectHandler() {

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

    const {popup, setPopup, notification, setNotification} = useContext(ProjectsHandlerContext)

    const UpBar = () => {
        return (
        <div className='upsection-container'>
            <SearchBar />  
            <div className='handler-button'>
                <button className="button-base new-project" onClick={() => setPopup(true)}> <img src="https://i.ibb.co/cYbZ0Fv/icons8-web-design-48.png" alt="icons8-web-design-48" className='icon'></img> New Project</button>
            </div>
        </div>
        )
    }

    
    const ProjectHandlerContent = () => {
        return(
        <>
            <div className="main-div">
                    <SideMenuBar />
                    <div className='changeable-content'>
                        <UpBar />
                        <ProjectsList />
                    </div>
            </div>
        </>
        )
    }
    
return (
    <div className="project-handler-container">
            <div className="flex-direction">
                <ProjectHandlerContent /> 
            </div>     
            
          {popup && <NewProjectPopup />}
          {notification && <NotificationAlert />}
    </div>
  )
}

export default ProjectHandler