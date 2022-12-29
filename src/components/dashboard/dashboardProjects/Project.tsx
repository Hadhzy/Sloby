import React from 'react'
import { TSlobyProject } from '../../../utils/types'
import ProjectsHandler from './ProjectsHandler'
import Image from 'next/image'

export default function Project({project}:{project:TSlobyProject}) {
  return (
    <div className='flex cursor-pointer flex-wrap w-[20%] ease-in-out duration-200 hover:scale-105 hover:translate-y-[-5px]'>
      <div className='w-full  rounded-t-3xl flex justify-center bg-dark-darkest'>
        <Image alt="Sloby Logo" className='mt-[10px] ' src={"/images/Sloby Logo Dark.svg"} width={150} height={70}/>
      </div>
      <div className='w-full bg-dark-project-bg h-72 rounded-b-3xl'>
      <div className='w-full items-end flex gap-3 h-[15%]'>
        <span className='ml-4 w-12 h-5 rounded-full text-black text-xs flex justify-center items-center bg-[#FEBC28]'>Work</span>
        <span className='w-12 h-5 rounded-full text-black text-xs flex justify-center items-center bg-[#FF5C5C]'>Apple</span>
        <span className='w-12 h-5 rounded-full text-black text-xs flex justify-center items-center bg-[#5B8DEE]'>IOS</span>
      </div>
      <p className='ml-4 mt-5 font-semibold text-xl'>{project.project_name}</p>
      <div className='ml-4 mt-2 text-xs text-dark-font-mid font-semibold'>
        Daniel and someone are editing...
      </div>
      <div className='ml-4 mt-2 text-base text-dark-font-light'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo veritatis doloribus minus, libero error in impedit totam soluta dolore numquam eum?</p>
      </div>
      <p className='mt-6 ml-4 text-sm text-dark-font-light font-bold'>Edited last day</p>
    </div>
    </div>
  )
}
