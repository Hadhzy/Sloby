import React, { useContext } from "react";
import Projects from "./Projects";
import { ProjectsContext } from "../../../utils/contexts/ProjectsContext";
import { useRouter } from "next/router";
import Loading from "../../loading";

export default function ProjectsHandler() {
  const { project_data, set_project_data } = useContext(ProjectsContext);
  const router = useRouter();
  return (
    <div
      onClick={() =>
        set_project_data({ ...project_data, project_modal: false })
      }
      className={`text-white h-[90vh] w-full p-16 ${
        project_data.project_modal &&
        router.pathname === "/editor/dashboard/projects"
          ? "blur-sm"
          : ""
      }`}
    >
      <p className="lg:text-lg font-bold text-dark-font-color flex gap-36">
        Projects
      </p>
      <Projects />
    </div>
  );
}
