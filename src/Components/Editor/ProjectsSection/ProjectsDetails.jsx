import React, {useContext} from 'react'
import { ProjectsContext } from '../../Context/ProjectsContext'

function ProjectsDetails({ project }) {
  const { removeProject } = useContext(ProjectsContext)
  return (
    <div className="project-main-container">  
      <div className='project-container'>
          <div className="project-image"><img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg" alt="" /></div>
          <div className='project-name'>{project.name}</div>
      </div>
    </div>  
  )
}
    
export default ProjectsDetails
