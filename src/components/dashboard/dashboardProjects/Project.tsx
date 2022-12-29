import React from 'react'
import { TSlobyProject } from '../../../utils/types'

export default function Project({project}:{project:TSlobyProject}) {
  return (
    <div className='mt-10 w-49 h-49 bg-dark-darker'>
      {project.project_name}
      <p>description: {project.project_description}</p>
      <p>public: {project.public.toString()}</p>
    </div>
  )
}
