import { Dispatch, SetStateAction, createContext, useState } from 'react';
import {v4 as uuidv4} from 'uuid'


type InputContext = {
  inputs: Array<{ value: string, id: string, position: {x: number, y: number} }>,
  setInputs: Dispatch<SetStateAction<{ value: string, id: string, position: {x: number, y: number} }[]>>
  handleChange: (e: any, index: number) => void,
  addInput: () => void
}

export const InputsContext = createContext<InputContext>(undefined!)

export const InputsContextProvider = ({ children }: { children: any }) => {
  const [inputs, setInputs] = useState<Array<{ value: string, id: string, position: {x: number, y: number} }>>([
    { value: '', id: uuidv4(), position: {x: 0, y: 0} },
  ])

  const handleChange = (e: any, index: number) => {
    const newInputs = [...inputs];
    newInputs[index].value = e.target.value;
    setInputs(newInputs);
  };
  
  const addInput = () => {
    setInputs([...inputs, { value: '', id: uuidv4(), position: {x: 0, y: 0} }]);
  }


  return (
    <InputsContext.Provider
      value={{
        inputs, 
        setInputs,
        handleChange,
        addInput
      }}
    >
      {children}
    </InputsContext.Provider>
  )
}


