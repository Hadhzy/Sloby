import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { toolsConstructors } from '../constants';
import { ProjectsContext } from './ProjectsContext';
import { TSlobyTool } from '../types';
type TToolClickedContext = {
  toolClicked: boolean;
  setToolClicked: Dispatch<SetStateAction<boolean>>;
};

export const ToolClickedContext = createContext<TToolClickedContext>(
  undefined!
);

export const ToolClickedContextProvider = ({ children }: { children: any }) => {


  const { tools, setTools } = useContext(ProjectsContext);
  const [toolClicked, setToolClicked] = useState<boolean>(false);

  return (
    <ToolClickedContext.Provider
      //@ts-ignore
      value={{
        toolClicked,
        setToolClicked,
      }}
    >
      {children}
    </ToolClickedContext.Provider>
  );
};
