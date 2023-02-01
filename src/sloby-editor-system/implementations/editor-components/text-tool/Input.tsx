import React, { useState, useEffect, useContext } from 'react';
import { BaseClassNames } from '../../../lib/grammar/BaseClassNames';
import { v4 as uuidv4 } from 'uuid';
import InterfacePropsIntegrator from '../../../lib/handlers/InteraceIntegrators/InterfacePropsIntegrator';
import { ToolClickedContext } from '../../../../utils/contexts/ToolClicked';
import { handleClientScriptLoad } from 'next/script';
import interfaceSourceIntegrator from '../../../lib/handlers/InteraceIntegrators/InterfaceSourceIntegrator';

interface Props {
  id: string;
  initialValue: string;
}

// export default function Input({ id }: { id: string }) {
export default function Input({ id, initialValue = '' }: Props) {
  const { toolClicked, setToolClicked } = useContext(ToolClickedContext);
  const [currentValue, setCurrentValue] = useState();
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});
  const props = new InterfacePropsIntegrator();
  const integrator = new interfaceSourceIntegrator();
  const [currentInputId, setCurrentInputId] = useState<string>('');
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    async function handleInput() {
      const storedValue: string = await props.getSingle(id);
      if (storedValue) {
        setValue(storedValue);
      }
    }
    handleInput();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.add(e.target.value, id);
  };

  // console.log(props.getAll());

  return (
    <input
      draggable
      id={id}
      value={value}
      placeholder="type your text here..."
      type="text"
      onChange={handleChange}
      className={`border-none hover:cursor-pointer translate-x-0 translate-y-0 tool-drag-element hover:decoration-2 duration-75  decoration-blue-400 hover:underline ${BaseClassNames.BASIC_DIV} bg-transparent`}
    />
  );
}