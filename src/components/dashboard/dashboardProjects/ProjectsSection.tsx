import React, { useContext } from 'react'
import ProjectsManager from './ProjectsManager'
import ProjectsHandler from './ProjectsHandler'
import { ProjectsContext, ProjectsContextProvider } from '../../../utils/contexts/ProjectsContext'
import ProjectModal from './ProjectModal'

export default function ProjectsSection() {
  const {project_data} = useContext(ProjectsContext)
  console.log(project_data.project_modal)

  return (
    <div className={`bg-dark-dark h-screen relative `}>
        {project_data.project_modal && <ProjectModal />}
        <ProjectsManager />
        <ProjectsHandler />
    </div>
  )
}