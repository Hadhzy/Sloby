import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { TSlobyProject, TSlobyTool, Tag } from '../types';

type ProjectsContext = {
  project_data: {
    project_name: string;
    project_description: string;
    project_modal: boolean;
  };
  current_project_id: string;
  set_current_project_id: Dispatch<SetStateAction<any>>;
  isProjectUpdating: boolean;
  setIsProjectUpdating: Dispatch<SetStateAction<boolean>>;
  set_project_data: Dispatch<
    SetStateAction<{
      project_name: string;
      project_description: string;
      project_modal: boolean;
    }>
  >;
  current_updated_project?: TSlobyProject | null;
  set_current_updated_project: Dispatch<SetStateAction<TSlobyProject | null>>;
  current_tags: Array<Tag> | [];
  set_current_tags: Dispatch<SetStateAction<any>>;
  actionBar: boolean;
  setActionBar: Dispatch<SetStateAction<boolean>>;
  currentProject: TSlobyProject;
  setCurrentProject: Dispatch<SetStateAction<TSlobyProject>>;
  tools: [TSlobyTool];
  setTools: Dispatch<SetStateAction<[TSlobyTool]>>;
  // popup: {
  //   msg: string;
  //   position: string;
  //   autoClose: number;
  //   hideProgressBar: boolean;
  //   closeOnClick: boolean;
  //   pauseOnHover: true;
  //   draggable: true;
  //   progress: undefined;
  //   theme: 'dark';
  // };
};

export const ProjectsContext = createContext<ProjectsContext>(undefined!);

export const ProjectsContextProvider = ({ children }: { children: any }) => {
  const [project_data, set_project_data] = useState({
    project_name: '',
    project_description: '',
    project_modal: false,
  });
  const [current_updated_project, set_current_updated_project] =
    useState<TSlobyProject | null>(null);
  const [current_project_id, set_current_project_id] = useState<string>('');
  const [current_tags, set_current_tags] = useState([]);
  const [actionBar, setActionBar] = useState(false);
  const [tools, setTools] = useState<any>([]);
  const [isProjectUpdating, setIsProjectUpdating] = useState(false);
  const [popup, setPopup] = useState();
  const [currentProject, setCurrentProject] = useState<TSlobyProject>({
    id: '',
    created_at: new Date(),
    project_name: '',
    project_description: '',
    creator: '',
    public: false,
    tags: [{ id: 1, color: '', tag: '' }],
    interface_source: [],
  });

  return (
    <ProjectsContext.Provider
      value={{
        project_data,
        set_project_data,
        current_project_id,
        set_current_project_id,
        current_tags,
        set_current_tags,
        actionBar,
        setActionBar,
        currentProject,
        setCurrentProject,
        tools,
        setTools,
        isProjectUpdating,
        setIsProjectUpdating,
        current_updated_project,
        set_current_updated_project,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
