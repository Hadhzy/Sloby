import {
  createContext,
  useState,
} from 'react';

import { v4 as uuidv4 } from 'uuid';


type TBluePrintContext = {
    elements: Array<any>;
    addBluePrintElement: (object: any) => void;
    setElements: (elements: Array<any>) => void;
}


export const BluePrintContext = createContext<TBluePrintContext >(undefined!);

export const BluePrintContextProvider = ({ children }: { children: any }) => {
    const [elements, setElements] = useState<Array<any>>([])

    const addBluePrintElement = (object: any) => {
    setElements([
      ...elements,
      {id: uuidv4(), object: object}
    ]);
  };

    return (
        <BluePrintContext.Provider value={{elements, addBluePrintElement, setElements}}>
            {children}
        </BluePrintContext.Provider>
    )
}



