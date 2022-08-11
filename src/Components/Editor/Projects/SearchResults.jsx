import React, {useContext} from 'react'
import {ContentContext} from "../../Context/ContentContext"

function SearchResults() {

    const {projects} = useContext(ContentContext)

  return (
    <div className='position-container'>
        <div className='search-results-container'>
            {
                projects.map((project) => {
                    return(
                      <>
                        <div className='search-result-itself'>
                            <div className='search-result-title'>{project.name}</div>
                            <div className='search-result-type'>
                                {project.type === 'project' && <img src="https://i.ibb.co/cYbZ0Fv/icons8-web-design-48.png" alt="" className='project-icon'/> || project.type === "folder" && <img src="https://cdn.discordapp.com/attachments/753660501996863488/1007204804096966686/icons8-opened-folder-48.png" alt="" className='icon'/>}
                            </div>   
                        </div>
                       
                        <div className='project-underline'></div>
                      </>  
                    )
                })
            }
           
        </div>
    </div> 
  )
}

export default SearchResults
