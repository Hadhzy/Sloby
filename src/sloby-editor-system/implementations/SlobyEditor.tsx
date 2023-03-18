import React, { useEffect, useContext, useState, useRef } from "react";
import SlobyToolBar from "./SlobyToolBar";
import { useRouter } from "next/router";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { ProjectsContext } from "../../utils/contexts/ProjectsContext";
import { ProjectServices } from "../../api/project.api";
import { EditorContextProvider } from "./contexts/Editor";
import SlobyPreview from "./SlobyPreview";
import SlobyListener from "./SlobyListener";
import SlobyInspector from "./SlobyInspector";

function SlobyEditor() {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const projectServices = new ProjectServices(supabase);
  const { setCurrentProject } = useContext(ProjectsContext);
  const [loading, setLoading] = useState(true);
  const boundingBox = useRef<HTMLDivElement>(null);

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
        <EditorContextProvider>
          <div className="flex h-screen flex-col justify-end">
            <SlobyListener />
            <SlobyToolBar boundingBox={boundingBox} />
            <div className="flex flex-row w-full h-full text-white relative bg-dark-darker">
              <SlobyPreview boundingBox={boundingBox}/>
              <SlobyInspector />
            </div>
          </div>
        </EditorContextProvider>
      </div>
    </>
  );
}

export default SlobyEditor;
