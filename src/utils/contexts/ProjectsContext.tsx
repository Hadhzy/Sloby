import { Dispatch, SetStateAction, createContext, useState } from "react";
import {Tag} from "../types";

type ProjectsContext = {
  project_data: {project_name: string, project_description: string, project_modal: boolean},
  current_project_id: string,
  set_current_project_id: Dispatch<SetStateAction<any>>
  set_project_data: Dispatch<SetStateAction<{
    project_name: string;
    project_description: string;
    project_modal: boolean;
}>>
    current_tags: Array<Tag> | []
    set_current_tags: Dispatch<SetStateAction<any>>
}

export const ProjectsContext = createContext<ProjectsContext>(undefined!)

export const ProjectsContextProvider = ({children}: {children: any}) => {
    const [project_data, set_project_data] = useState({ project_name: '', project_description: '', project_modal: false })
    const [current_project_id, set_current_project_id] = useState<string>('')
    const [current_tags, set_current_tags] = useState([])

  return (
    <ProjectsContext.Provider value={{
      project_data,
      set_project_data,
      current_project_id,
      set_current_project_id,
      current_tags,
      set_current_tags
    }}>
      {children}
    </ProjectsContext.Provider>
  )
}