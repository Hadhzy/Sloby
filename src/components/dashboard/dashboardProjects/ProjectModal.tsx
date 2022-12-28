import React, { useContext } from 'react'
import { ProjectsContext } from '../../../utils/contexts/ProjectsContext'

export default function ProjectModal() {
  const {project_data} = useContext(ProjectsContext)
  return (
    <div className={`text-white border-2 border-white w-[40%] right-0 h-full fixed z-50`}>das</div>
  )
}
