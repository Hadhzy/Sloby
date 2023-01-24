import React, { useEffect, useContext, useState } from 'react';
import SlobyEditorInformation from './SlobyEditorInformation';
import SlobyBuildingSteps from './SlobyBuildingSteps';
import SlobyTools from './SlobyTools';
import SlobyPreviewSiteInterface from './SlobyPreviewSiteInterface';
import SlobyModifier from './SlobyModifier';
import { useRouter } from 'next/router';
import { getCurrentProject } from '../../utils/api';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { ProjectsContext } from '../../utils/contexts/ProjectsContext';
import { motion } from 'framer-motion';
import { Audio } from 'react-loader-spinner';
import WelcomePage from '../../components/dashboard/WelcomePage';
import { ProjectServices } from '../../api/project.api';

function SlobyEditor() {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const projectServices = new ProjectServices(supabase);
  const { setCurrentProject } = useContext(ProjectsContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    projectServices.getCurrentProject(router.query.id as string).then((data) => setCurrentProject(data as any));
    // const currentProject = getCurrentProject(
    //   router.query.id as string,
    //   supabase
    // );
    // currentProject.then((res) => setCurrentProject(res));
  });

  return (
    <>
      <div>
        <div className="flex h-screen flex-col justify-end">
          <SlobyEditorInformation />
          <div className="flex h-full text-white">
            <SlobyTools />
            <SlobyPreviewSiteInterface />
            <SlobyModifier />
          </div>
        </div>
      </div>
    </>
  );
}

export default SlobyEditor;
