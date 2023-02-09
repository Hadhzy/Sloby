import { useSupabaseClient } from '@supabase/auth-helpers-react';
import React, { useEffect } from 'react';
import { TSlobyProject } from '../../../utils/types';
import Project from './Project';
import { ProjectServices } from '../../../api/project.api';
import { motion } from 'framer-motion';

export default function Projects() {
  const projectServices = new ProjectServices(useSupabaseClient());
  const [projects, setProjects] = React.useState([]);

  useEffect(() => {
    // getProjects(setProjects, supabase);
    projectServices.getProjects().then((data) => setProjects(data.data as any));
  }, []);

  return (
    <div
      className={
        'grid md:grid-cols-2 gap-y-5 lg:grid-cols-3 lg:gap-x-5 xl:grid-cols-4'
      }
    >
      {projects.map((project: TSlobyProject, index: number) => {
        return (
          <motion.div
            key={project.id}
            className="flex flex-wrap gap-20 border-white"
          >
            <Project key={project.id} project={project} index={index} />
          </motion.div>
        );
      })}
    </div>
  );
}
