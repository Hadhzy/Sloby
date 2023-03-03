import { useSupabaseClient } from '@supabase/auth-helpers-react';
import React, { useEffect,useState } from 'react';
import { TSlobyProject } from '../../../utils/types';
import Project from './Project';
import { ProjectServices } from '../../../api/project.api';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Projects() {
  const projectServices = new ProjectServices(useSupabaseClient());
  const [projects, setProjects] = React.useState([]);
  const supabase = useSupabaseClient()
  const router = useRouter()
  const [shouldProjectUpdate, setShouldProjectUpdate] = useState(false)

  const updateProject = () => { 
    
    projectServices
      .getProjects()
      .then((data) => setProjects(data.data as any));
  }
  
  useEffect(() => {
    // getProjects(setProjects, supabase);
    updateProject()
  }, []);
  
  const onProjectUpdate = (payload: any) => {
    updateProject()
  };
  // realtime update 
  supabase
      .channel('projects_table_change')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'projects',
        },
        onProjectUpdate
      )
      .subscribe();

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
