import React, { useEffect, useContext, useState, useLayoutEffect } from 'react';
import SlobyEditorInformation from './SlobyEditorInformation';
import SlobyTools from './SlobyTools';
import SlobyPreviewSiteInterface from './SlobyPreviewSiteInterface';
import SlobyModifier from './SlobyModifier';
import { useRouter } from 'next/router';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { ProjectsContext } from '../../utils/contexts/ProjectsContext';
import { ProjectServices } from '../../api/project.api';

function SlobyEditor() {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const projectServices = new ProjectServices(supabase);
  const { setCurrentProject } = useContext(ProjectsContext);
  const [loading, setLoading] = useState(true);

  const [toolClicked, setToolClicked] = useState(false);

  useEffect(() => {
    projectServices
      .getCurrentProject(router.query.id as string)
      .then((data) => setCurrentProject(data as any));
    // const currentProject = getCurrentProject(
    //   router.query.id as string,
    //   supabase
    // );
    // currentProject.then((res) => setCurrentProject(res));
  }, []);

  useLayoutEffect(() => {}, [toolClicked]);

  return (
    <>
      <div className="select-none">
        <div className="flex h-screen flex-col justify-end">
          <SlobyEditorInformation />
          <div className="flex h-full text-white">
            <SlobyTools
              setToolClicked={setToolClicked}
              toolClicked={toolClicked}
            />
            <SlobyPreviewSiteInterface
              setToolClicked={setToolClicked}
              toolClicked={toolClicked}
            />
            <SlobyModifier />
          </div>
        </div>
      </div>
    </>
  );
}

export default SlobyEditor;

//NOTE: i just commented this , i don't know what it's doing here.

// function useLayoutEffeca(arg0: () => void, arg1: boolean[]) {
//   throw new Error('Function not implemented.');
// }
