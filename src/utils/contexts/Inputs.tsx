import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'


type InputContext = {
  inputs: Array<{ value: string, id: string, position: { x: number, y: number } }>,
  setInputs: Dispatch<SetStateAction<{ value: string, id: string, position: { x: number, y: number } }[]>>
  handleChange: (e: any, index: number) => void,
  handlePositionChange: (p: any, id: string) => void,
  addInput: () => void
}

export const InputsContext = createContext<InputContext>(undefined!)

export const InputsContextProvider = ({ children }: { children: any }) => {
  const [inputs, setInputs] = useState<Array<{ value: string, id: string, position: { x: number, y: number } }>>([
    { value: '', id: uuidv4(), position: { x: 0, y: 0 } },
  ])

  const handleChange = (e: any, index: number) => {
    const newInputs = [...inputs];
    newInputs[index].value = e.target.value;
    setInputs(newInputs);
  };


  const handlePositionChange = (p: any, id: string) => {
    // console.log(id);
    const newInputs = [...inputs];
    const inputToUpdate = newInputs.find(i => i.id === id);
    if (inputToUpdate) {
      inputToUpdate.position = p;
    }
    var updatedInputs = newInputs.filter(i => i.id !== id);
    // inputToUpdate && newInputs.push(inputToUpdate);
    updatedInputs = [...updatedInputs, inputToUpdate!];
    // updatedInputs.push(into)
    // console.log("UPDATE: ", inputToUpdate);
    setInputs(updatedInputs);
  }

  const addInput = () => {
    setInputs([...inputs, { value: '', id: uuidv4(), position: { x: 0, y: 0 } }]);
  }

  return (
    <InputsContext.Provider
      value={{
        inputs,
        setInputs,
        handleChange,
        handlePositionChange,
        addInput
      }}
    >
      {children}
    </InputsContext.Provider>
  )
}