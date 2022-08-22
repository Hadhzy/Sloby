import React, {useContext} from 'react'
import {ContentContext} from "../../Context/ContentContext"
import {motion} from "framer-motion"
import { useState } from 'react'
import {Link} from "react-router-dom"

function SearchResults({ searchInput, isInputFocused }) {
    const {projects} = useContext(ContentContext)
    const [isEmpty, setIsEmpty] = useState(false)



    
    const EmptyError = () => {
        return (
            <div className='error-container'>Stupid fuck Learn type first :D</div>
        )
    }


    

    const ResultProjects = ({ project_data }) => {
        
        
        return(
            
            <motion.div
            key={project_data.id}
            name="searchResult"
            >
                    <div className='search-result-itself' id='searchResult' style={{  borderRadius: project_data.last ? "0px 0px 10px 10px" : "0px",}}
                    >
                        <div className='search-result-title' name='searchResult'>
                            {project_data.name}
                        </div>
                        <div className='navigate'>
                            <Link to="#" className='off-link-dec' name='searchResult'>
                                <button className='jumpto-button'>Jump to</button>
                            </Link>
                        </div>
                        <div className='search-result-type' name='searchResult'>
                            {project_data.type === 'project' && <img src="https://i.ibb.co/cYbZ0Fv/icons8-web-design-48.png" alt="" className='project-icon'/> || project_data.type === "folder" && <img src="https://cdn.discordapp.com/attachments/753660501996863488/1007204804096966686/icons8-opened-folder-48.png" alt="" className='project-icon'/>}
                        </div>   
                    </div>
                    
                    <div className={project_data.last ? "hide" : 'project-underline'}></div>  
            </motion.div>  
        )
    }
    
    const value = searchInput.toLowerCase()
    let searchResult = projects.filter(project_data => project_data.name.toLowerCase().includes(value))
    let projectsLast = projects.map(project_data => project_data.last)

    document.addEventListener("click", (e) => {
        console.log(e.target.id)
    })


    return (
    <div className='position-container' >
        <div   className='search-results-container' style={{ borderRadius: projectsLast ? "0px 0px 10px 10px" : "0px" }}>


            {
                searchResult.length === 0 ? <EmptyError />

                :
                searchResult.map(project_data => {
                    return (
                        searchResult.length === 0 ? <ResultProjects project_data={project_data} key={project_data.id} />
                        : <ResultProjects project_data={project_data} key={project_data.id} />
                    )
                })            
            }

        </div>
    </div> 
  )
}

export default SearchResults
