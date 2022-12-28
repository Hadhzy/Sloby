import { Dispatch, SetStateAction, createContext, useState } from "react";

type ProjectsContext = {
  project_data: {project_name: string, project_description: string, project_modal: boolean},
  set_project_data: Dispatch<SetStateAction<{
    project_name: string;
    project_description: string;
    project_modal: boolean;
}>>
}

export const ProjectsContext = createContext<ProjectsContext>(undefined!)

export const ProjectsContextProvider = ({children}: {children: any}) => {
  const [project_data, set_project_data] = useState({ project_name: '', project_description: '', project_modal: false })


  return (
    <ProjectsContext.Provider value={{
      project_data,
      set_project_data 
    }}>
      {children}
    </ProjectsContext.Provider>
  )
}