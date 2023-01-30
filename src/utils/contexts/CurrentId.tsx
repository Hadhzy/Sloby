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
import PreviousMap from 'postcss/lib/previous-map';

type TSpecificToolClicked = {
  specificToolClicked: { [key: string]: boolean },
  setSpecificToolClicked: Dispatch<SetStateAction<{ TextCreationTool: boolean }>>,
  handleToolClicked: (currentTool: TSlobyTool, value: boolean) => void
}

export const CurrentIdContext = createContext<TSpecificToolClicked>(undefined!)

export const CurrentIdContextProvider = ({ children }: { children: any }) => {
  const [specificToolClicked, setSpecificToolClicked] = useState({
      TextCreationTool: false
    })

    function handleToolClicked(currentTool: TSlobyTool, value: boolean) {
      return setSpecificToolClicked({ ...specificToolClicked, [currentTool.tool_name]: value })
    }

    return (
      <CurrentIdContext.Provider
        value={{
          specificToolClicked,
          setSpecificToolClicked,
          handleToolClicked
        }}
      >
        {children}
      </CurrentIdContext.Provider>
    )
  }