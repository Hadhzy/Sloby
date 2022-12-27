import { useSession } from '@supabase/auth-helpers-react'
import React from 'react'
import DashboardUserDetails from './DashboardUserDetails'
import DashboardLayout from '../layouts/indext'

export default function DashboardHome() {
  const session = useSession()
  console.log(session?.user.user_metadata)
  return (
     <DashboardLayout>
      <div className='bg-black w-full h-screen'>
        <DashboardUserDetails />
      </div>
     </DashboardLayout>
  )
}