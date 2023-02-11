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
import { TInputContextProps } from '../../../../utils/types';

interface Props {
  id: string;
  initialValue: string;
}

// export default function Input({ id }: { id: string }) {
export default function Input({
  input,
  index,
}: {
  input: TInputContextProps;
  index: number;
}) {
  const { toolClicked, setToolClicked } = useContext(ToolClickedContext);
  const props = new InterfacePropsIntegrator();
  const integrator = new interfaceSourceIntegrator();
  const [value, setValue] = useState('');
  const [optionsState, setOptionsState] = useState(false);
  const { inputs, setInputs } = useContext(InputsContext);

  //for dragging
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const inputRef = useRef<any>();

  const { handleChange } = useContext(InputsContext);

  const handleDelete = (
    e:
      | React.MouseEvent<SVGSVGElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    return setInputs(inputs.filter((item) => item.id !== e.currentTarget.id));
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLInputElement>) => {
    const input = inputRef.current;
    if (!input) return;

    const initialX = event.clientX - position.x;
    const initialY = event.clientY - position.y;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      console.log('moving');
      setPosition({
        x: moveEvent.clientX - initialX,
        y: moveEvent.clientY - initialY,
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', handleMouseMove);
    });
  };

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    input.style.left = `${position.x}px`;
    input.style.top = `${position.y}px`;
  }, [position]);

  useEffect(() => {
    return inputRef.current.focus();
  }, [toolClicked]);

  const optionsToggle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setOptionsState(!optionsState);
  };

  useEffect(() => {
    console.log(input);
  }, [input]);

  // const handleFocus = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
  //   const focusedInput = inputs.find(
  //     (input: TInputContextProps) => input.id === e.currentTarget.id
  //   );
  //   if (focusedInput?.states.isFocused === false) {
  //     focusedInput.states.isFocused = true;
  //     focusedInput.states.isSelected = false;
  //     setInputs([...inputs, focusedInput]);
  //   } else return;
  // };

  // const handleSelection = () => {
  //   const selectedInput = inputs.find(
  //     (item: TInputContextProps) => item.id === input.id
  //   );
  //   if (selectedInput?.states.isSelected === false) {
  //     selectedInput.states.isSelected = true;
  //     setInputs([...inputs, selectedInput]);
  //   } else return;
  // };

  const [styles, setStyles] = useState('');

  return (
    <div
      className={`max-w-fit relative group rounded overflow-hidden ease-in-out duration-150`}
    >
      <input
        ref={inputRef}
        // onMouseDown={handleMouseDown}
        onKeyDown={(e) => {
          if (e.key === 'Delete') {
            return handleDelete(e);
          }
        }}
        id={input.id}
        value={input.value}
        style={input.style}
        onChange={(e) => handleChange(e, index)}
        placeholder="type your text here..."
        type="text"
        onBlur={() => {
          let index = inputs.findIndex(
            (value: TInputContextProps) => value.id === input.id
          );

          if (index !== -1 && index < inputs.length) {
            setInputs((prev) => [
              ...prev.slice(0, index),
              { ...prev[index], states: { isReadonly: true } },
              ...prev.slice(index + 1),
            ]);
            inputs[index] = { ...inputs[index], states: { isReadonly: false } };
          } else return;
        }}
        onDoubleClick={() => {
          let index = inputs.findIndex(
            (value: TInputContextProps) => value.id === input.id
          );

          if (index !== -1 && index < inputs.length) {
            setInputs((prev) => [
              ...prev.slice(0, index),
              { ...prev[index], states: { isReadonly: false } },
              ...prev.slice(index + 1),
            ]);
            inputs[index] = { ...inputs[index], states: { isReadonly: false } };
          } else return;
        }}
        onClick={() => setStyles('border-blue-600')}
        readOnly={input.states.isReadonly}
        className={`mt-0  hover:cursor-pointer 
        border-transparent translate-x-0 translate-y-0 tool-drag-element duration-75 ${BaseClassNames.BASIC_DIV} bg-transparent`}
      />
      <button
        onClick={optionsToggle}
        className={`absolute top-[10px] right-0 invisible group-hover:visible py-1 px-2 hover:scale-110  duration-150 ease-in-out ${
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
