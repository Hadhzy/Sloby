import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
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
  const [toolClicked, setToolClicked] = useState<boolean>(false);

  return (
    <ToolClickedContext.Provider
      value={{
        toolClicked,
        setToolClicked,
      }}
    >
      {children}
    </ToolClickedContext.Provider>
  );
};
