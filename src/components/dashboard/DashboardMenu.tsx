import React, { useState } from 'react'
import Image from 'next/image'
import Login from '../authentication/components/login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBarsProgress} from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useSWRConfig } from 'swr'
import projects from '../../pages/editor/dashboard/projects'

export default function DashboardMenu() {
  const [visible, setVisible] = useState({ projects: false, settings: false })

  return <div className='bg-dark-main-dark h-screen w-[90px]  border-dark-border border-r flex flex-col justify-between'>
    <div className='flex flex-col items-center'>
      <Link href='/editor/dashboard'>
        <Image alt="Sloby Logo" className='mt-[10px]' src={"/images/Sloby Logo Dark.svg"} width={70} height={70} />
      </Link>
      <div className='relative'>
        <Link href="/editor/dashboard/projects">
          <FontAwesomeIcon onMouseLeave={() => setVisible({ projects: false, settings: false })} onMouseEnter={() => setVisible({ projects: true,  settings: false })} icon={faBarsProgress} className='text-dark-mid font-[10px] text-4xl mt-[20px] p-[10px] cursor-pointer ease-in static duration-200 hover:text-white hover:bg-[#212121] hover:text-[] rounded-xl'/> 
        </Link>
        {visible.projects && (
          <div className='absolute top-[35%] left-[110%] text-white bg-dark-main-dark p-2 rounded-xl '>
            projects
          </div>
        )}
      </div>
    </div>
    <div className='flex justify-center mb-[20px] relative'>
      <FontAwesomeIcon icon={faGear} onMouseLeave={() => setVisible({projects: false, settings: false})} onMouseEnter={() => setVisible({ projects: false, settings: true })}  className='text-dark-mid text-4xl mt-[20px] p-[10px] cursor-pointer ease-in duration-200 hover:bg-[#212121] hover:text-white rounded-xl'/>
      {visible.settings && (
          <div className='absolute top-[35%] left-[110%] text-white bg-dark-main-dark p-2 rounded-xl  '>
            settings
          </div>
      )}
    </div>
  </div>
}
