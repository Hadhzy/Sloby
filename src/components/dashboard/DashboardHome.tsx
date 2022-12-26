import { useSession } from '@supabase/auth-helpers-react'
import React from 'react'
import DashboardUserDetails from './DashboardUserDetails'

export default function DashboardHome() {
  const session = useSession()
  console.log(session?.user.user_metadata)
  return (
    <div className='bg-black w-full'>
       <DashboardUserDetails />
    </div>
  )
}