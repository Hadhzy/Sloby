// The whole projects page, containts the projects(ProjectsHandler), its like a container.

import React, { useContext } from 'react';
import ProjectsHandler from './ProjectsBlurContainer';
import { ProjectsContext } from '../../../utils/contexts/ProjectsContext';
import { ToastContainer, toast } from 'react-toastify';

export default function ProjectsPage() {
  const { project_data } = useContext(ProjectsContext);
  return (
    <div
      className={` h-screen relative ${
        project_data.project_modal && 'bg-[rgba(0, 0, 0,)]' // Changes the background if the modal is opened
      }`}
    >
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ProjectsHandler />
    </div>
  );
}
