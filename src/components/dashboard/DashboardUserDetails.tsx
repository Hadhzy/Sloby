import { useSession } from '@supabase/auth-helpers-react'
import React from 'react'
import DashboardStats from './DashboardStats'
import Image from 'next/image'


export default function DashboardUserDetails() {
  const session = useSession()
 console.log(session?.user.user_metadata.avatar_url);
  return (
    <div className='flex flex-col gap-10 ml-[15px]'>
      <div className='text-white text-bold ml-9 mt-11 text-4xl lg:text-7xl font-bold flex gap-[150px]'>
        Good Morning, <br />{session?.user.user_metadata.name}
        <img src={session?.user.user_metadata.avatar_url} alt="" className='w-[180px] h-[180px] rounded-full'/>
      </div>
      <div className='text-white'>
        <DashboardStats />
      </div>
    </div>
  )
}
