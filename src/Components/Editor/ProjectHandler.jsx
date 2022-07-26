import React from 'react'
import  ArrowBackIosIcon  from '@material-ui/icons/ArrowBackIos'
import { Link } from "react-router-dom"

function ProjectHandler() {

    const SideMenuBar = () => {
        return(
            <div className='menu-bar-container'>
                <div className="icon">
                    <Link to="/" className='white'>
                        <ArrowBackIosIcon className="arrow-icon"/>
                    </Link>
                </div>
                <div className='menu-items '>
                    <Link to="#" className='off-link-dec'>
                        Account
                    </Link>
                </div>
                <div className='menu-items'>
                    <Link to="#" className='off-link-dec'>
                        Account
                    </Link>
                </div>
                <div className='menu-items' >
                    <Link to="#" className='off-link-dec'>
                        Account
                    </Link>
                </div>
            </div>
        )
    }

    const Titles = () => {
        return(
            <div className='titles'>
                <span>Pick</span> or <span>Create</span> a new project
            </div>
        )
    }

    const ProjectCreator = () => {
        return(
            <div className='project-creator-container'>
                Hey i am the one who going to create this project    
            </div>
        )
    }

    



  return (
    <div className='project-handler-container'>
        <Titles />
       <div className='display-flex'>
          <SideMenuBar />
          <ProjectCreator />  
       </div>
    </div>
  )
}

export default ProjectHandler
