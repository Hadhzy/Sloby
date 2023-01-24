import {
  useSession,
  useSupabaseClient,
  useUser,
} from '@supabase/auth-helpers-react';
import { SupabaseClient } from '@supabase/supabase-js';
import React, { useEffect, useContext } from 'react';
import supabase from '../../../config/supabase';
import { TSlobyProject } from '../../../utils/types';
import Project from './Project';
import { ProjectsContext } from '../../../utils/contexts/ProjectsContext';
import { getProjects } from '../../../utils/api';
import { ProjectServices } from '../../../api/project.api';

export default function Projects() {
  const session = useSession();
  const projectServices = new ProjectServices(useSupabaseClient());
  const [projects, setProjects] = React.useState([]);
  const { actionBar } = useContext(ProjectsContext);


  useEffect(() => {
    // getProjects(setProjects, supabase);
    projectServices.getProjects().then((data) => setProjects(data.data as any));
  }, [supabase]);

  return (
    <div className={'flex flex-row gap-36'}>
      {projects.map((project: TSlobyProject) => {
        return (
          <div key={project.id} className="flex flex-wrap gap-20 border-white">
            <Project key={project.id} project={project} />
          </div>
        );
      })}
    </div>
  );
}
