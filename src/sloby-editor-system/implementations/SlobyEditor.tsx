import React, { useEffect, useContext } from "react";
import SlobyEditorInformation from "./SlobyEditorInformation";
import SlobyBuildingSteps from "./SlobyBuildingSteps";
import SlobyTools from "./SlobyTools";
import SlobyPreviewSiteInterface from "./SlobyPreviewSiteInterface";
import SlobyModifier from "./SlobyModifier";
import { useRouter } from "next/router";
import { getCurrentProject } from "../../utils/api";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { ProjectsContext } from "../../utils/contexts/ProjectsContext";
import { motion } from "framer-motion";

function SlobyEditor() {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const { setCurrentProject } = useContext(ProjectsContext);

  useEffect(() => {
    const currentProject = getCurrentProject(
      router.query.id as string,
      supabase
    );
    currentProject.then((res) => setCurrentProject(res));
  });

  return (
    <div className="bg-tool-bg">
      <div className="flex h-screen flex-col justify-end">
        <SlobyEditorInformation />
        <SlobyBuildingSteps />
        <div className="flex h-full text-white">
          <SlobyTools />
          <SlobyPreviewSiteInterface />
          <SlobyModifier />
        </div>
      </div>
    </div>
  );
}

export default SlobyEditor;
