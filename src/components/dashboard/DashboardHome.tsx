import {useSession} from '@supabase/auth-helpers-react'
import React from 'react'
import DashboardUserDetails from './DashboardUserDetails'
import DashboardLayout from '../layouts/indext'
import ProjectsManager from "./dashboardProjects/ProjectsManager";
import {getRandomNumber} from "./getRandomNumber";

export default function DashboardHome({totalVisits, totalUsage}: { totalVisits: number[], totalUsage: number[] }) {
    const session = useSession()
    console.log(session?.user.user_metadata)
    console.log('totalvists', totalVisits)
    return (
        <DashboardLayout>
            <div className='bg-dark-dark w-full h-full'>
                <ProjectsManager/>
                <DashboardUserDetails totalVisits={totalVisits} totalUsage={totalUsage}/>
            </div>
        </DashboardLayout>
    )
}
