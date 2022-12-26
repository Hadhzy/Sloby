import React from 'react'
import Image from 'next/image'
import Login from '../authentication/components/login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBarsProgress} from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'

export default function DashboardMenu() {
  return <div className='bg-[#111111] h-screen w-[90px]  border-[#303030] border-r-2 flex flex-col justify-between'>
    <div className='flex flex-col items-center'>
      <Image alt="Sloby Logo" className='mt-[10px]' src={"/images/Sloby Logo Dark.svg"} width={70} height={70}/>
      <FontAwesomeIcon icon={faBarsProgress} className='text-[#363636] text-4xl mt-[20px] p-[8px] cursor-pointer ease-in duration-200 hover:bg-[#191919] rounded-xl'/>
    </div>
    <div className='flex justify-center mb-[20px]'>
      <FontAwesomeIcon icon={faGear} className='text-[#363636] text-4xl mt-[20px] p-[8px] cursor-pointer ease-in duration-200 hover:bg-[#191919] rounded-xl'/>
    </div>
  </div>
}
