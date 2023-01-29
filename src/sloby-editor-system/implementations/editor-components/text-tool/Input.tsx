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

  // async function currentInpuId() {
  //   setCurrentInputId(
  //     toolClicked
  //       ? await props.handleInputId(uuidv4())
  //       : await props.getInputId()
  //   );
  // }

  useEffect(() => {
    async function handleInput() {
      const storedValue: string = await props.getSingle(id);
      if (storedValue) {
        setValue(storedValue);
      }
    }
    // async function handleInputs() {
    //   const value = await props.getSingle(id);
    //   setInputValues({ ...inputValues, [id]: value });
    // }
    handleInput();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.add(e.target.value, id);
  };

  // useEffect(() => {
  //   new InterfacePropsIntegrator().addInputValues()
  // }, [toolClicked]);

  // useEffect(() => {
  //   console.log("HERE");
  //   document.addEventListener('mouseenter', (e) => {

  //     console.log("X: " + e.clientX + " | " + "Y: " + e.clientY);
  //     const item = document.querySelector('.tool-drag-element') as HTMLInputElement;
  //     item.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
  //   });
  //   return () => window.removeEventListener('mouseover', () => { });
  // }, [t])

  return (
    <input
      // onDragStart={(e) => {
      // window.addEventListener('mouseover', (e) => {
      // console.log("X: " + e.clientX + " | " + "Y: " + e.clientY);
      // })
      // }}
      onDragEnd={(e) => {
        // console.log("X: " + e.screenX + " | " + "Y: " + e.screenY);
        const item = document.querySelector(
          '.tool-drag-element'
        ) as HTMLInputElement;
        item.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
        // console.log(window.getComputedStyle(item).getPropertyValue("transform"));
        // const style = window.getComputedStyle(item);
        // const matrix = new WebKitCSSMatrix(style.transform);
        // console.log(matrix);
      }}
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
