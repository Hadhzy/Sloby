import React, {useContext} from 'react'
import {ContentContext} from "../../NotEditorRelated/Context/ContentContext"
import {motion} from "framer-motion"
import { useState } from 'react'
import {Link} from "react-router-dom"
import {ProjectsContext} from "../store/Projects/ProjectsContext"
import { Input, ProjectState } from '../types/interfaces/index'


function SearchResults({ searchInput }: {searchInput: Input}) {
    const { projects} = useContext(ProjectsContext)
    console.log(typeof searchInput)
    
    const EmptyError = () => {
        return (
            <div className='error-container'>
                <div className='text-container'>
                    You may be <span>mistyped</span> something or you haven't create a <span>project</span> yet         
                </div>
                <div className='icon-container'>
                    <img src="https://cdn.discordapp.com/attachments/753660501996863488/1011163488166613063/icons8-nothing-found-96.png" alt="" className='big-icon'/>
                </div>
            </div>
        )
    }


    

    const ResultProject = ({ project_data }: {project_data: ProjectState}) => {
        return(
            <motion.div
            key={project_data.id}
            >
                    <div className='search-result-itself' id='searchResult' style={{  borderRadius:  "0px 0px 10px 10px" }}
                    >
                        <div className='search-result-title'>
                            {project_data.name}
                        </div>
                        <div className='navigate'>
                            <Link to="#" className='off-link-dec' >
                                <button className='jumpto-button'>Jump to</button>
                            </Link>
                        </div>
                        <div className='search-result-type'>
                            {project_data.projectType === 'project' && <img src="https://i.ibb.co/cYbZ0Fv/icons8-web-design-48.png" alt="" className='project-icon'/> }
                        </div>   
                    </div>
                    
                    <div className={project_data.last ? "hide" : 'project-underline'}></div>  
            </motion.div>  
        )
    }
    
    const value = searchInput.toLowerCase()
    let searchResult = projects?.filter(project_data => project_data.name.toLowerCase().includes(value))


    return (
    <div className='position-container' >
        <div   className='search-results-container' style={{ borderRadius: "0px 0px 10px 10px" }}>


            {
                searchResult?.length === 0 ? <EmptyError />
                :
                searchResult?.map(project_data => {
                    return <ResultProject project_data={project_data} key={project_data.id} />
                })            
            }
        </div>
    </div> 
  )
}

export default SearchResults
