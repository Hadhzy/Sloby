import React, {useContext, useState, useEffect} from 'react'
import SearchBar from "./SearchBar"
import SideMenuBar from './SideMenuBar'
import ProjectsList from "./ProjectsList"
import NewProjectPopup from './NewProjectPopup'
import {ProjectsHandlerContext} from '../../store/Projects/ProjectsHandlerContext'
import { toast, ToastContainer } from 'react-toastify'
import { AiOutlineSearch } from 'react-icons/ai'
import {FcSettings} from "react-icons/fc"
import { AiOutlinePlusCircle } from "react-icons/ai"

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
            <div className='searchbar'>
                <SearchBar />
            </div>
            <div className='handler-button'>
                <button className='button-base new-project' onClick={() => setPopup(true)}> <AiOutlinePlusCircle className='icon-base'/>  New Project</button>    
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