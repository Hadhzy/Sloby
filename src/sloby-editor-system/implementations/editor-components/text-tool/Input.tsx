import React, { useState, useEffect, useContext } from 'react';
import { BaseClassNames } from '../../../lib/grammar/BaseClassNames';
import { v4 as uuidv4 } from 'uuid';
import InterfacePropsIntegrator from '../../../lib/handlers/InteraceIntegrators/InterfacePropsIntegrator';
import { ToolClickedContext } from '../../../../utils/contexts/ToolClicked';
import { handleClientScriptLoad } from 'next/script';
import interfaceSourceIntegrator from '../../../lib/handlers/InteraceIntegrators/InterfaceSourceIntegrator';
import { InputsContext } from '../../../../utils/contexts/Inputs';
import JsxParser from 'react-jsx-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faTrashCan,
  faFaceSmile,
} from '@fortawesome/free-solid-svg-icons';

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
  const [optionsState, setOptionsState] = useState(false);

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

  const optionsToggle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setOptionsState(!optionsState);
  };

  return (
    <div className="max-w-fit relative group rounded hover:shadow-[0_0_2px_2px_rgba(255,255,255,0.9)] hover:shadow-white overflow-hidden">
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
        className={`border-none mt-0 hover:cursor-pointer translate-x-0 translate-y-0 tool-drag-element duration-75 ${BaseClassNames.BASIC_DIV} bg-transparent`}
      />
      <button
        onClick={optionsToggle}
        className={`absolute top-0 right-0 invisible group-hover:visible py-1 px-2 hover:scale-110  duration-150 ease-in-out ${
          optionsState ? 'hidden' : 'visible'
        } `}
      >
        <FontAwesomeIcon icon={faEllipsisVertical} className="text-lg" />
      </button>

      <div
        className={`absolute top-0 right-0 ${
          optionsState ? 'translate-y-0' : '-translate-y-6'
        } transition transition-all`}
      >
        <button>
          <FontAwesomeIcon icon={faFaceSmile} className="text-lg p-1" />
        </button>
        <button>
          <FontAwesomeIcon icon={faFaceSmile} className="text-lg p-1" />
        </button>
        <button onClick={optionsToggle}>
          <FontAwesomeIcon icon={faTrashCan} className="text-lg p-1" />
        </button>
      </div>
    </div>
  );
}
