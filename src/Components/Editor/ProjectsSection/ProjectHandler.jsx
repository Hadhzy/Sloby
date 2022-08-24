import React, {useContext, useState, useEfffect, useEffect} from 'react'
import SearchBar from "./SearchBar"
import SideMenuBar from './SideMenuBar'
import ProjectsContainer from "./ProjectsContainer"
import Popup from './Popup'
import {ProjectsHandlerContext} from '../../Context/ProjectsHandlerContext'

function ProjectHandler() {

    const {popup, setPopup, notification, setNotification} = useContext(ProjectsHandlerContext)

    
    const UpSection = () => {


        return(
        <div className="main-div">
            <div className='upsection-container'>
                <div className='project-title'>
                        <img src="https://cdn.discordapp.com/attachments/753660501996863488/1011564091401314344/icons8-male-user-96.png" alt="" className='base-icon '/>
                        <div className="user-details">
                            gaborhadhazy
                            gaborhadhazy@gmail.com
                        </div>    
                </div>
                  <SearchBar />  
                <div className='handler-buttons'>
                    <button className="button-base new-project" onClick={() => setPopup(true)}> <img src="https://i.ibb.co/cYbZ0Fv/icons8-web-design-48.png" alt="icons8-web-design-48" className='icon'></img> New Project</button>
                    <button className="button-base new-folder">  <img src="https://cdn.discordapp.com/attachments/753660501996863488/1006217245485174844/unknown.png" alt="" className="icon"/> New Folder</button>
                </div>
            </div>

        </div>
        )
    }

    

    
return (
    <div className="project-handler-container">
          <UpSection />  

       <div className='display-flex'>
          <SideMenuBar />
          <ProjectsContainer />  
          {popup && <Popup />}
       </div>
    </div>
  )
}

export default ProjectHandler