import React, {useContext} from 'react'
import { ProjectsContext } from '../../Context/ProjectsContext'

function ProjectsDetails({ project }) {
  const { dispatch } = useContext(ProjectsContext)

  return (
      <div className='project-container' onClick={() => dispatch({ type: "REMOVE_PROJECT", id: project.id})}>
          <div className="project-image"><img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg" alt="" /></div>
          <div className='project-name'>{project.name}</div>
      </div>
  )
}
    
export default ProjectsDetails
