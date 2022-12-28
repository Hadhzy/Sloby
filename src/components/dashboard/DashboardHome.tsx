import {useSession} from '@supabase/auth-helpers-react'
import React from 'react'
import DashboardUserDetails from './DashboardUserDetails'
import DashboardLayout from '../layouts/indext'
import ProjectsManager from "./dashboardProjects/ProjectsManager";

export default function DashboardHome() {
    const session = useSession()
    console.log(session?.user.user_metadata)
    return (
        <DashboardLayout>
            <div className='bg-dark-dark w-full h-full'>
                <ProjectsManager/>
                <DashboardUserDetails/>
            </div>
        </DashboardLayout>
    )
}
