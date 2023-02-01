import React, { useContext } from 'react';
import ProjectsHandler from './ProjectsHandler';
import { ProjectsContext } from '../../../utils/contexts/ProjectsContext';

export default function ProjectsSection() {
  const { project_data } = useContext(ProjectsContext);

  return (
    <div
      className={` h-screen  relative ${
        project_data.project_modal && 'bg-[rgba(0, 0, 0,)]'
      }`}
    >
      <ProjectsHandler />
    </div>
  );
}
