import React from 'react'
import SlobyEditorInformation from './SlobyEditorInformation'
import SlobyBuildingSteps from './SlobyBuildingSteps'
import SlobyTools from './SlobyTools'
import SlobyPreviewSiteInterface from './SlobyPreviewSiteInterface'
import SlobyModifier from './SlobyModifier'

function SlobyEditor() {
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