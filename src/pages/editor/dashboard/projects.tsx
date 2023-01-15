import React, { useContext } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard/DashboardLayout';
import Projects from '../../../components/dashboard/dashboardProjects/ProjectsSection';
import { QueryClientProvider } from 'react-query';
import { LoadingContext } from '../../../utils/contexts/Loading';
import Loading from '../../../components/loading';
import { useSession } from '@supabase/auth-helpers-react';
import { motion } from 'framer-motion';

export default function projects() {
  return (
    <div className="flex">
      <DashboardLayout>
        <Projects />
      </DashboardLayout>
    </div>
  );
}
