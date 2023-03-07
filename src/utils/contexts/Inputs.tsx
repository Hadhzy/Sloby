import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TInputContextProps } from '../types';
import { useRouter } from 'next/router';

type InputContext = {
  inputs: Array<TInputContextProps>;
  lastClicked: string;
  setInputs: Dispatch<SetStateAction<TInputContextProps[]>>;
  setLastClicked: Dispatch<SetStateAction<string>>;
  handleChange: (e: any, index: number) => void;
  addInput: (tag_type: string) => void;
  styleChange: (e: any, id: string, type: string) => void;
  getStyles: (id: string) => [];
  handlePositionChange: (e: any, id: string) => void;
  saveDimensions: (dimensions: { x: number; y: number }, id: string) => void;
  getPosition: (id: string) => { x: number; y: number } | undefined;
  getDimensions: (id: string) => { x: number; y: number } | undefined;
};

export const InputsContext = createContext<InputContext>(undefined!);

export const InputsContextProvider = ({ children }: { children: any }) => {
  const router = useRouter();
  const [inputs, setInputs] = useState<Array<TInputContextProps>>([]);

  const [lastClicked, setLastClicked] = useState('');

  const saveDimensions = (dimensions: { x: number; y: number }, id: string) => {
    // console.log('dimensionChange: ', dimensions);
    const newInputs = [...inputs];
    for (let i = 0; i < newInputs.length; i++) {
      if (id == newInputs[i].id) {
        newInputs[i].dimensions = { x: dimensions.x, y: dimensions.y };
      }
    }
    setInputs(newInputs);
  };

  const getStyles = (id: string) => {
    for (let i = 0; i < inputs.length; i++) {
      if (id == inputs[i].id) {
        return inputs[i].style;
      }
    }
  };
  const getPosition = (id: string) => {
    for (let i = 0; i < inputs.length; i++) {
      if (id == inputs[i].id) {
        return inputs[i].position;
      }
    }
  };
  const getDimensions = (id: string) => {
    for (let i = 0; i < inputs.length; i++) {
      if (id == inputs[i].id) {
        return inputs[i].dimensions;
      }
    }
  };

  const handlePositionChange = (e: any, id: string) => {
    // console.log('positionChange: ', e.x);
    const newInputs = [...inputs];
    for (let i = 0; i < newInputs.length; i++) {
      if (id == newInputs[i].id) {
        newInputs[i].position = { x: e.x, y: e.y };
      }
    }
    setInputs(newInputs);
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

  const addInput = (tag_type: string) => {
    if (uuidv4) {
      setInputs([
        ...inputs,
        {
          type: tag_type,
          value: '',
          id: uuidv4(),
          position: { x: 1, y: 0 },
          style: {
            color: '#FFFFFF',
            fontSize: '16px',
            fontWeight: '500',
            fontFamily: 'montserrat',
          },
          states: { isReadonly: false },
          dimensions: { x: 0, y: 0 },
        },
      ]);
    }
  };

  return (
    <InputsContext.Provider
      value={{
        inputs,
        lastClicked,
        saveDimensions,
        handlePositionChange,
        getPosition,
        getDimensions,
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
