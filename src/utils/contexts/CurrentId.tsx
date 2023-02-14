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

type TSpecificToolClicked = {
  currentId: string
  setCurrentId: (id: string) => void
}

export const CurrentIdContext = createContext<TSpecificToolClicked>(undefined!)

export const CurrentIdContextProvider = ({ children }: { children: any }) => {
 const [currentId, setCurrentId] = useState<string>('')

    

    return (
      <CurrentIdContext.Provider
        value={{
          currentId,
          setCurrentId
        }}
      >
        {children}
      </CurrentIdContext.Provider>
    )
  }