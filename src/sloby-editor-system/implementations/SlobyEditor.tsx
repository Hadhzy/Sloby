import React,{useEffect, useContext} from 'react'
import SlobyEditorInformation from './SlobyEditorInformation'
import SlobyBuildingSteps from './SlobyBuildingSteps'
import SlobyTools from './SlobyTools'
import SlobyPreviewSiteInterface from './SlobyPreviewSiteInterface'
import SlobyModifier from './SlobyModifier'
import { useRouter } from 'next/router'
import { getCurrentProject } from '../../utils/api'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { ProjectsContext } from '../../utils/contexts/ProjectsContext'

function SlobyEditor() {
  const router = useRouter()
  const supabase = useSupabaseClient()
  const {setCurrentProject} = useContext(ProjectsContext)

  useEffect(() => {
    const currentProject = getCurrentProject(router.query.id as string, supabase)
    currentProject.then((res) => setCurrentProject(res))
  })

  return <div className='bg-dark-dark-mid flex h-screen flex-col justify-end'>
    <div className='text-white border  border-red-600 h-[5%] flex justify-center items-center'>
      <SlobyEditorInformation />
    </div>
    <SlobyBuildingSteps />
    <div className='flex justify-between h-full text-white'>
      <SlobyTools />
      <SlobyPreviewSiteInterface />
      <SlobyModifier />
    </div>
  </div>
}



export default SlobyEditor