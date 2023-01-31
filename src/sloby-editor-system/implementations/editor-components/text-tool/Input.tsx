import React, { useState, useEffect, useContext, useRef } from 'react';
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
  faTrash,
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
  input: { id: string; value: string; position: { x: number; y: number } };
  index: number;
}) {
  const { toolClicked, setToolClicked } = useContext(ToolClickedContext);
  const props = new InterfacePropsIntegrator();
  const integrator = new interfaceSourceIntegrator();
  const [value, setValue] = useState('');
  const [optionsState, setOptionsState] = useState(false);
  const { inputs, setInputs } = useContext(InputsContext);
  const inputRef = useRef<any>();

  const { handleChange } = useContext(InputsContext);

  const handleDelete = (
    e:
      | React.MouseEvent<SVGSVGElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    return setInputs(inputs.filter((item) => item.id !== e.currentTarget.id));
  };

  const handleMouseDown = (e: any) => {
    inputRef.current.style.transition = 'none';
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const { left, top } = inputRef.current.getBoundingClientRect();
    const dx = mouseX - left;
    const dy = mouseY - top;
    const handleMouseMove = (e: any) => {
      const x = e.clientX - dx;
      const y = e.clientY - dy;
      const currentInput = inputs.find(
        (item) => item.id === e.currentTarget.id
      );
      if (currentInput) {
        currentInput.position.x = x;
        currentInput.position.y = y;
        setInputs([...inputs, currentInput]);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', () => {
      inputRef.current.style.transition = 'all 0.2s ease-out';
      window.removeEventListener('mousemove', handleMouseMove);
    });
  };

  useEffect(() => {
    console.log('Adding new an input');
  }, [toolClicked]);

  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus();
    }
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
    <div
      className={`max-w-fit relative group rounded overflow-hidden ease-in-out duration-150`}
    >
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
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === 'Delete') {
            return handleDelete(e);
          }
        }}
        draggable
        id={input.id}
        value={input.value}
        onChange={(e) => handleChange(e, index)}
        placeholder="type your text here..."
        type="text"
        className={` mt-0 hover:cursor-pointer border-transparent  translate-x-0 translate-y-0 tool-drag-element duration-75 ${BaseClassNames.BASIC_DIV} bg-transparent`}
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
        } transition-all`}
      >
        <button>
          <FontAwesomeIcon icon={faFaceSmile} className="p-1" />
        </button>
        <button>
          <FontAwesomeIcon icon={faFaceSmile} className="p-1" />
        </button>
        <button onClick={optionsToggle}>
          <FontAwesomeIcon
            icon={faTrash}
            id={input.id}
            onClick={(e) => handleDelete(e)}
            className=" p-1 text-red-500 hover:scale-105 ease-in-out duration-100"
          />
        </button>
      </div>
    </div>
  );
}
