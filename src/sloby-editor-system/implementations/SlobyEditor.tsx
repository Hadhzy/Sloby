import React, { useEffect, useContext, useState, useLayoutEffect } from 'react';
import SlobyEditorInformation from './SlobyEditorInformation';
import SlobyTools from './SlobyTools';
import SlobyPreviewSiteInterface from './SlobyPreviewSiteInterface';
import SlobyModifier from './SlobyModifier';
import { useRouter } from 'next/router';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { ProjectsContext } from '../../utils/contexts/ProjectsContext';
import { ProjectServices } from '../../api/project.api';
import { ToolClickedContextProvider } from '../../utils/contexts/ToolClicked';
import {
  CurrentIdContext,
  CurrentIdContextProvider,
} from '../../utils/contexts/CurrentId';
import {
  InputsContext,
  InputsContextProvider,
} from '../../utils/contexts/Inputs';

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

  return (
    <>
      <div className="select-none">
        <ToolClickedContextProvider>
          <CurrentIdContextProvider>
            <InputsContextProvider>
              <div className="flex h-full flex-col justify-end">
                <SlobyEditorInformation />
                <div className="flex h-full text-white">
                  <SlobyTools />
                  <SlobyPreviewSiteInterface />
                  <SlobyModifier />
                </div>
              </div>
            </InputsContextProvider>
          </CurrentIdContextProvider>
        </ToolClickedContextProvider>
      </div>
    </>
  );
}

export default SlobyEditor;

//NOTE: i just commented this , i don't know what it's doing here.

// function useLayoutEffeca(arg0: () => void, arg1: boolean[]) {
//   throw new Error('Function not implemented.');
// }
