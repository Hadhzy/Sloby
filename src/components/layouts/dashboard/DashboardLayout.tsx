import DashboardMenu from '../../dashboard/DashboardMenu';
import { AnimatePresence } from 'framer-motion';
import ProjectModal from '../../dashboard/dashboardProjects/ProjectModal';
import ProjectsManager from '../../dashboard/dashboardProjects/ProjectsManager';
import { useContext } from 'react';
import { ProjectsContext } from '../../../utils/contexts/ProjectsContext';

export default function DashboardLayout({ children }: { children: any }) {
  const { project_data, set_project_data } = useContext(ProjectsContext);

  return (
    <>
      <DashboardMenu />
      <DashboardMenu className={'invisible !static'} />
      <AnimatePresence>
        {project_data.project_modal && <ProjectModal />}
      </AnimatePresence>
      <div className={`bg-dark-dark w-full h-full`}>
        <ProjectsManager />
        <main>{children}</main>
      </div>
    </>
  );
}
