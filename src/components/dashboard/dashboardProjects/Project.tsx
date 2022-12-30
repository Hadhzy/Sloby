import React from 'react'
import {TSlobyProject} from '../../../utils/types'
import ProjectsHandler from './ProjectsHandler'
import Image from 'next/image'

export default function Project({project}: { project: TSlobyProject }) {
    return (
        <div
            className='flex cursor-pointer flex-wrap w-72 ease-in-out duration-200 hover:scale-105 hover:translate-y-[-5px]'>
            <div className='w-full rounded-t-3xl flex justify-center bg-dark-darkest'>
                <Image alt="Sloby Logo" className='mt-[10px]' src={"/images/Sloby Logo Dark.svg"} width={150}
                       height={70}/>
            </div>
            <div className='flex flex-col p-4 pb-6 gap-2 w-full bg-dark-project-bg min-h-[18rem] rounded-b-3xl'>
                <div className='w-full items-end flex gap-3 h-[15%]'>
                    <span
                        className='w-12 h-5 rounded-full text-black text-xs flex justify-center items-center bg-[#FEBC28]'>Work</span>
                    <span
                        className='w-12 h-5 rounded-full text-black text-xs flex justify-center items-center bg-[#FF5C5C]'>Apple</span>
                    <span
                        className='w-12 h-5 rounded-full text-black text-xs flex justify-center items-center bg-[#5B8DEE]'>IOS</span>
                </div>
                <p className='mt-2 font-semibold text-xl'>{project.project_name}</p>
                <div className='text-xs text-dark-font-mid font-semibold'>
                    Daniel and someone are editing...
                </div>
                <div className='text-base text-dark-font-light'>
                    <p>{project.project_description}</p>
                </div>
                <p className='justify-self mt-auto text-sm text-dark-font-light font-bold'>Edited last day</p>
            </div>
        </div>
    )
}
