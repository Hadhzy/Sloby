import React from 'react'

export default function SlobyBuildingSteps() {
  return (
    <div className='text-white bg-dark-building-steps-bg p-4 h-[4%] flex items-center w-full justify-center gap-12'>
      <div className='bg-dark-steps-bg px-2 py-1 rounded-xl ease-in-out duration-150 cursor-pointer  hover:scale-105 hover:bg-dark-preview-hover'>
        Object
      </div>
      <div className='bg-dark-steps-bg px-2 py-1 rounded-xl ease-in-out duration-150 cursor-pointer  hover:scale-105 hover:bg-dark-preview-hover'>
        UI/UX
      </div>
      <div className='bg-dark-steps-bg px-2 py-1 rounded-xl ease-in-out duration-150 cursor-pointer  hover:scale-105 hover:bg-dark-preview-hover'>
        Logic
      </div>
      <div className='bg-dark-steps-bg px-2 py-1 rounded-xl ease-in-out duration-150 cursor-pointer  hover:scale-105 hover:bg-dark-preview-hover'>
        Animations
      </div>
    </div>
  )
}
