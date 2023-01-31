import React, { useState, useEffect, useContext } from 'react';
import { BaseClassNames } from '../../../lib/grammar/BaseClassNames';
import { v4 as uuidv4 } from 'uuid';
import InterfacePropsIntegrator from '../../../lib/handlers/InteraceIntegrators/InterfacePropsIntegrator';
import { ToolClickedContext } from '../../../../utils/contexts/ToolClicked';
import { handleClientScriptLoad } from 'next/script';
import interfaceSourceIntegrator from '../../../lib/handlers/InteraceIntegrators/InterfaceSourceIntegrator';
import { InputsContext } from '../../../../utils/contexts/Inputs';
import JsxParser from 'react-jsx-parser';

interface Props {
  id: string;
  initialValue: string;
}

// export default function Input({ id }: { id: string }) {
export default function Input({
  input,
  index,
}: {
  input: { id: string; value: string };
  index: number;
}) {
  const { toolClicked, setToolClicked } = useContext(ToolClickedContext);
  const props = new InterfacePropsIntegrator();
  const integrator = new interfaceSourceIntegrator();
  const [value, setValue] = useState('');

  const { handleChange } = useContext(InputsContext);

  useEffect(() => {
    console.log('Adding new an input');
  }, [toolClicked]);

  // useEffect(() => {
  //   async function handleInput() {
  //     const storedValue: string = await props.getSingle('');
  //     if (storedValue) {
  //       setValue(storedValue);
  //     }
  //   }

  //   handleInput();
  // }, ['']);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  //   props.add(e.target.value, '');
  // };

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
      id={input.id}
      value={input.value}
      onChange={(e) => handleChange(e, index)}
      placeholder="type your text here..."
      type="text"
      className={`border-none hover:cursor-pointer translate-x-0 translate-y-0 tool-drag-element hover:decoration-2 duration-75  decoration-blue-400 hover:underline ${BaseClassNames.BASIC_DIV} bg-transparent`}
    />
  );
}
