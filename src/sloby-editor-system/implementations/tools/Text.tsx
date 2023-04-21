// Description: Input component for text tool

import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Draggable from '../utils/Draggable';
import { EditorContext } from '../contexts/Editor';

interface TextProps {
  boundingBox: { boundingBox: React.RefObject<HTMLDivElement> };
  components: Array<any>;
  initialLocation: Array<number>;
  dataIndex: any;
  data: any;
  setData: any;
}

export default function Text({
  boundingBox,
  components,
  dataIndex,
  data,
  setData,
}: TextProps) {
  const [snapped, setSnapped] = useState(true);
  const [readOnly, setReadOnly] = useState(true);
  const [styles, setStyles] = useState('border-transparent');
  const { currentlySelected, setCurrentlySelected } = useContext(EditorContext);

  console.log('data', data);

  const handleDrag = (x: number, y: number) => {
    setData((prev: any) => {
      prev[dataIndex].position = [x, y];
      return [...prev];
    });
  };

  const handleChange = (e: any) => {
    console.log(e.target.id);
    console.log(
      'data updated',
      data.find((element: any) => element.id === e.target.id)
    );
  };

  return (
    <Draggable
      initialPosition={[0, 0]}
      boundingBox={boundingBox.boundingBox}
      callback={handleDrag}
    >
      <input
        // // onMouseDown={handleMouseDown}}
        onChange={(e) => handleChange(e)}
        placeholder="type your text here..."
        type="text"
        onDoubleClick={() => {
          setReadOnly(false);
        }}
        onClick={(e) => {
          e.stopPropagation();
          setCurrentlySelected(dataIndex);
          setStyles('border-blue-600');
        }}
        readOnly={readOnly}
        className={`rounded hover:cursor-pointer
        border-transparent translate-x-0 translate-y-0 tool-drag-element duration-75 bg-transparent`}
      />
    </Draggable>
  );
}
