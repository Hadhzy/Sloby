import React, { useState } from 'react'

function ProjectsManager() {
  const [clickedClass, setClickedClass] = useState({ projects: true, shared: false })

  return (
    <div className='w-full p-8 h-14 border-b border-dark-border flex justify-between items-center ease-in-out duration-200'>
      <div className='flex gap-14 font-semibold text-dark-font-color ease-in-out duration-200'>
        <div onClick={() => setClickedClass({ projects: true, shared: false })} className={`p-2 ease-in-out duration-200 hover:scale-105  bg-dark-dark rounded-xl hover:bg-dark-border hover:text-white cursor-pointer ${clickedClass.projects ? 'bg-dark-border text-white scale-105' : ""}`}>
          <p>All Projects</p>
        </div>
        <div className={`p-2 ease-in-out duration-200  bg-dark-dark rounded-xl hover:bg-dark-border hover:scale-105 hover:text-white cursor-pointer ${clickedClass.shared ? 'bg-dark-border text-white scale-105' : ""}`} onClick={() => setClickedClass({ projects: false, shared: true })}>
          <p>Shared Projects</p>
        </div>
      </div>
      <div className='mr-16 text-white ease-in-out duration-200  btn bg-blue-700 hover:translate-y-[-2px] hover:scale-105 hover:bg-blue-600'>
        <button>New Project</button>
      </div>
    </div>
  )
}

export default ProjectsManager