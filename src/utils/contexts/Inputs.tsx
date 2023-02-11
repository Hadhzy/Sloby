import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TInputContextProps } from '../types';

type InputContext = {
  inputs: Array<TInputContextProps>;
  lastClicked: string;
  setInputs: Dispatch<
    SetStateAction<TInputContextProps[]>
  >;
  setLastClicked: Dispatch<SetStateAction<string>>;
  handleChange: (e: any, index: number) => void;
  addInput: () => void;
  styleChange: (e: any, id: string, type: string) => void;
  getStyles: (id: string) => [];
};

export const InputsContext = createContext<InputContext>(undefined!);

export const InputsContextProvider = ({ children }: { children: any }) => {
  const [inputs, setInputs] = useState<
    Array<TInputContextProps>
  >([
    {
      value: '',
      id: uuidv4(),
      position: { x: 0, y: 0 },
      style: {},
      states: {
        isReadonly: false, 
      }
    },
  ]);

  const [lastClicked, setLastClicked] = useState('');

  const getStyles = (id: string) => {
    for (let i = 0; i < inputs.length; i++) {
      if (id == inputs[i].id) {
        return inputs[i].style;
      }
    }
  };

  const handleChange = (e: any, index: number) => {
    const newInputs = [...inputs];
    newInputs[index].value = e.target.value;
    setInputs(newInputs);
  };
  const styleChange = (style: any, id: string, type: string) => {
    console.log('styleChange: ', style, id, type);
    const newInputs = [...inputs];
    for (let i = 0; i < newInputs.length; i++) {
      if (id == newInputs[i].id) {
        newInputs[i].style = { ...newInputs[i].style, [type]: style };
      }
    }
    setInputs(newInputs);
  };



  const addInput = () => {
    setInputs([
      ...inputs,
      { value: '', id: uuidv4(), position: { x: 0, y: 0 }, style: {}, states: {isReadonly: false} },
    ]);
  };

  return (
    <InputsContext.Provider
      value={{
        inputs,
        lastClicked,
        setLastClicked,
        setInputs,
        handleChange,
        styleChange,
        addInput,
        getStyles,
      }}
    >
      {children}
    </InputsContext.Provider>
  );
};
