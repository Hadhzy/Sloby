// The base DashboardHomePage
import { useSession } from '@supabase/auth-helpers-react';
import React, { useContext } from 'react';
import DashboardUserDetails from './DashboardUserDetails';
import DashboardLayout from '../layouts/dashboard/DashboardLayout';
import ProjectsManager from './ProjectsInDashboard/DashboardNavbar';
import { getRandomNumber } from './getRandomNumber';
import { AnimatePresence } from 'framer-motion';
import ProjectModal from './ProjectsInDashboard/ProjectModal';
import { ProjectsContext } from '../../utils/contexts/ProjectsContext';

export default function DashboardHomePage({
  totalVisits,
  totalUsage,
}: {
  totalVisits: number[];
  totalUsage: number[];
}) {
  const session = useSession();
  const { project_data, set_project_data } = useContext(ProjectsContext);
  return (
    <DashboardLayout>
      <DashboardUserDetails totalVisits={totalVisits} totalUsage={totalUsage} />
    </DashboardLayout>
  );
}
