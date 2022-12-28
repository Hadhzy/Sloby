import React from 'react'
import ProjectsManager from './ProjectsManager'
import ProjectsHandler from './ProjectsHandler'

export default function ProjectsSection() {
  return (
    <div className='bg-dark-dark h-screen'>
        <ProjectsManager />
        <ProjectsHandler />
    </div>
  )
}