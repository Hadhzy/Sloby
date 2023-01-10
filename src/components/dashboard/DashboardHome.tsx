import { useSession } from '@supabase/auth-helpers-react';
import React, { useContext } from 'react';
import DashboardUserDetails from './DashboardUserDetails';
import DashboardLayout from '../layouts/dashboard/DashboardLayout';
import ProjectsManager from './dashboardProjects/ProjectsManager';
import { getRandomNumber } from './getRandomNumber';
import { AnimatePresence } from 'framer-motion';
import ProjectModal from './dashboardProjects/ProjectModal';
import { ProjectsContext } from '../../utils/contexts/ProjectsContext';

export default function DashboardHome({
  totalVisits,
  totalUsage,
}: {
  totalVisits: number[];
  totalUsage: number[];
}) {
  const session = useSession();
  const { project_data, set_project_data } = useContext(ProjectsContext);
  console.log(session?.user.user_metadata);
  console.log('totalvists', totalVisits);
  return (
    <DashboardLayout>
      <DashboardUserDetails totalVisits={totalVisits} totalUsage={totalUsage} />
    </DashboardLayout>
  );
}
