import React, { useContext } from 'react';
import Projects from './ProjectsList';
import { ProjectsContext } from '../../../utils/contexts/ProjectsContext';
import { useRouter } from 'next/router';
import Loading from '../../loading';

export default function ProjectsBlurContainer() {
  const { project_data, set_project_data } = useContext(ProjectsContext);
  const router = useRouter();
  return (
    <div
      className={`text-white h-[90vh] w-full p-16 ${
        project_data.project_modal &&
        router.pathname === '/editor/dashboard/projects'
          ? 'blur-sm' // add blur-sm style to the div
          : ''
      }`}
    >
      <p className="lg:text-lg mb-6 font-bold text-dark-font-color flex gap-36">
        Projects
      </p>
      <Projects />
    </div>
  );
}
