import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react';
import { BaseClassNames } from '../../../lib/grammar/BaseClassNames';
import { v4 as uuidv4 } from 'uuid';
import InterfacePropsIntegrator from '../../../lib/handlers/InteraceIntegrators/InterfacePropsIntegrator';
import { ToolClickedContext } from '../../../../utils/contexts/ToolClicked';
import { handleClientScriptLoad } from 'next/script';
import interfaceSourceIntegrator from '../../../lib/handlers/InteraceIntegrators/InterfaceSourceIntegrator';
import { InputsContext } from '../../../../utils/contexts/Inputs';
import JsxParser from 'react-jsx-parser';
// import { useWindowDimensions } from '../../../../utils/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faTrash,
  faFaceSmile,
} from '@fortawesome/free-solid-svg-icons';
import { TInputContextProps } from '../../../../utils/types';
import { motion } from 'framer-motion';

interface Props {
  id: string;
  initialValue: string;
}

// export default function Input({ id }: { id: string }) {
export default function Input({
  input,
  index,
  width,
}: {
  input: TInputContextProps;
  index: number;
  width: number;
}) {
  const { toolClicked, setToolClicked } = useContext(ToolClickedContext);
  const props = new InterfacePropsIntegrator();
  const integrator = new interfaceSourceIntegrator();
  const [value, setValue] = useState('');
  const [optionsState, setOptionsState] = useState(false);
  const {
    inputs,
    setInputs,
    getPosition,
    handleChange,
    handlePositionChange,
    getDimensions,
  } = useContext(InputsContext);
  // const windowDimensions = useWindowDimensions();

  // console.log(windowDimensions);

  //for dragging
  const [position, setPosition] = useState(getPosition(input.id));
  const [dimensions, setDimensions] = useState({ x: 0, y: 0 });
  const inputRef = useRef<any>();
  const [ratio, setRatio] = useState<number>();
  const [lastWidth, setLastWidth] = useState<number>(width);

  const handleDelete = (
    e:
      | React.MouseEvent<SVGSVGElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    return setInputs(inputs.filter((item) => item.id !== e.currentTarget.id));
  };

  useEffect(() => {
    const temp = getPosition(input.id);
    const temp2 = getDimensions(input.id);
    console.log('temp: ', temp);
    console.log('width: ', width);
    if (temp) {
      setPosition(temp);
      setRatio(temp.x / width);
    }
    if (temp2) {
      setDimensions(temp2);
    }
  }, []);

  useEffect(() => {
    console.log('ratio: ', ratio);
    console.log('position.x: ', position!.x);
    if (!ratio && position!.x != 0) {
      // console.log('width: ', width);
      // console.log('position.x: ', position.x);
      setRatio(position!.x / width);
      setLastWidth(width);
      return;
    }
    // console.log('ratio: ', ratio);
    if (ratio && position!.x != 0) {
      // console.log('LW: ', lastWidth);
      // console.log('W: ', width);
      setPosition({
        x: position!.x + (width - lastWidth) * ratio,
        y: position!.y,
      });
      setLastWidth(width);
    }
  }, [width]);

  useEffect(() => {
    return inputRef.current.focus();
  }, [toolClicked]);

  const optionsToggle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setOptionsState(!optionsState);
  };

  // useEffect(() => {
  //   console.log(input);
  // }, [input]);

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

  function relativeCoords(event: any) {
    const bounds = event.target.getBoundingClientRect();

    // workaround for getting error on MouseUp outside of the relative div where inputs should be placed
    // need for better solution
    if (
      event.target.offsetParent == null ||
      event.target.offsetParent.offsetParent == null
    ) {
      return;
    }

    handlePositionChange(
      {
        x:
          bounds.left -
          event.target.offsetParent.offsetParent.offsetParent.offsetLeft,
        y:
          bounds.top -
          event.target.offsetParent.offsetParent.offsetParent.offsetTop,
      },
      input.id
    );
    setRatio(
      (bounds.left -
        event.target.offsetParent.offsetParent.offsetParent.offsetLeft) /
        width
    );
  }

  return (
    <motion.div
      drag
      onDragEnd={(e: any) => relativeCoords(e)}
      dragMomentum={false}
      dragElastic={0.075}
      dragConstraints={{
        top: -position!.y,
        left: -position!.x,
        right: width - position!.x - dimensions.x,
        bottom: 890 - position!.y - dimensions.y,
      }}
      style={{
        position: 'absolute',
        top: position!.y,
        left: position!.x,
      }}
      onClick={(e) => console.log(e)}
    >
      <div
        className={`max-w-fit relative group rounded overflow-hidden ease-in-out duration-150`}
      >
        <input
          ref={inputRef}
          // // onMouseDown={handleMouseDown}
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
              inputs[index] = {
                ...inputs[index],
                states: { isReadonly: false },
              };
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
              inputs[index] = {
                ...inputs[index],
                states: { isReadonly: false },
              };
            } else return;
          }}
          onClick={() => setStyles('border-blue-600')}
          readOnly={input.states.isReadonly}
          className={`hover:cursor-pointer 
        border-transparent translate-x-0 translate-y-0 tool-drag-element duration-75 bg-transparent`}
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
    </motion.div>
  );
}
