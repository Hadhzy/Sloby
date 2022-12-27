import React from 'react'
import DashboardLayout from '../../../components/layouts/indext'
import Projects from '../../../components/dashboard/dashboardProjects/Projects'

export default function projects() {
  return (
    <div className='flex'>
      <DashboardLayout>
        <Projects />
      </DashboardLayout>
    </div>
  )
}
