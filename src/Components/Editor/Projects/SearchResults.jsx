import React, {useContext} from 'react'
import {ContentContext} from "../../Context/ContentContext"
import {motion} from "framer-motion"

function SearchResults({ value }) {

    const {projects} = useContext(ContentContext)

    

    const ResultProjects = ({project_data}) => {
        return(
            <motion.div
                    
                    key={project_data.id}
                >
                    <div className='search-result-itself'>
                        <div className='search-result-title'>{project_data.name}</div>
                        <div className='search-result-type'>
                            {project_data.type === 'project' && <img src="https://i.ibb.co/cYbZ0Fv/icons8-web-design-48.png" alt="" className='project-icon'/> || project_data.type === "folder" && <img src="https://cdn.discordapp.com/attachments/753660501996863488/1007204804096966686/icons8-opened-folder-48.png" alt="" className='project-icon'/>}
                        </div>   
                    </div>
                    
                    <div className='project-underline'></div>
            </motion.div>  
        )
    }


    let searchResult = projects.filter(project_data => project_data.name.includes(value))


    
        return (
        <div className='position-container'>
        <div className='search-results-container'>
            {
                searchResult.map(project_data => {
                    return <ResultProjects project_data={project_data} key={project_data.id}/>
                })            
            }
        </div>
    </div> 
  )
}

export default SearchResults
