import React from 'react'
import SlobyEditorInformation from './SlobyEditorInformation'
import SlobyBuildingSteps from './SlobyBuildingSteps'

function SlobyEditor() {
  return <div className='bg-dark-dark-mid flex h-screen flex-col justify-end'>
    <div className=' border text-white  border-red-600 h-[5%] flex justify-center items-center'>
      <SlobyEditorInformation />
    </div>
    <SlobyBuildingSteps />
    
  </div>
}



export default SlobyEditor