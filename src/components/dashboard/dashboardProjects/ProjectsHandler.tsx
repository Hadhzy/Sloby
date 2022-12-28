import React from 'react'
import Projects from './Projects'

export default function ProjectsHandler() {
  return (
    <div className='text-white w-full p-16'>
      <p className='lg:text-lg font-bold text-dark-font-color flex gap-36'>Projects</p>
      <Projects />
    </div>
  )
}