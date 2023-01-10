import React, { useContext, useEffect } from 'react';
import ProjectsManager from './ProjectsManager';
import ProjectsHandler from './ProjectsHandler';
import {
  ProjectsContext,
  ProjectsContextProvider,
} from '../../../utils/contexts/ProjectsContext';
import ProjectModal from './ProjectModal';
import { AnimatePresence } from 'framer-motion';
import { LoadingContext } from '../../../utils/contexts/Loading';
import Loading from '../../loading';

export default function ProjectsSection() {
  const { project_data } = useContext(ProjectsContext);
  const { setLoading } = useContext(LoadingContext);

  return (
    <div
      className={` h-screen relative ${
        project_data.project_modal && 'bg-[rgba(0, 0, 0,)]'
      }`}
    >
      <ProjectsHandler />
    </div>
  );
}
