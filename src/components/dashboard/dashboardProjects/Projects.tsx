import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { SupabaseClient } from '@supabase/supabase-js'
import React from 'react'
import supabase from '../../../utils/supabase'
import { TSlobyProject } from '../../../utils/types'
import Project from './Project'



export default function Projects() {
  const session = useSession()
  const fakeProjects = [
    {id: 1, created_at: 'whatever', project_name: "test", project_description: "test", shared_with: [], creator: session?.user.id as string, public: false}
  ]
  const proper_projects = fakeProjects.filter((projects: TSlobyProject) => projects.creator === session?.user.id)

  return (
    <div>
      {
        proper_projects.map((project: TSlobyProject) => {
          return <Project key={project.id} project={project}/>
        })
      }
    </div>
  )
}


