import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { toolsConstructors } from '../utils/constants';
import { useRouter } from 'next/router';
import InterfaceIntegration from '../lib/handlers/InterfaceIntegration';
import DatabaseService from '../lib/services/DatabaseService';
import parse from 'html-react-parser';
import ElementModifier from '../lib/modifiers/ElementModifier';
import JsxParser from 'react-jsx-parser';
import SlobyInput from '../../components/SlobyInput';
import JSXStyle from 'styled-jsx/style';
import { DndProvider } from 'react-dnd';

export default function SlobyPreviewSiteInterface() {
  const [currentSource, setCurrentSource] = useState('');
  const router = useRouter();

  function mousedown(item: HTMLDivElement) {
    item.addEventListener('mousemove', (e: MouseEvent) => mousemove(e, item));
    item.addEventListener('mouseup', () => mouseup(item));
  }

  function mouseup(item: HTMLDivElement) {
    item.removeEventListener('mousemove', (e: MouseEvent) =>
      mousemove(e, item)
    );
  }

  function mousemove(e: MouseEvent, element: any) {
    let x = e.clientX - 125 + 'px';
    let y = e.clientY - 25 + 'px';
    element.style.left = x;
    element.style.top = y;
  }

  const textToolElements = document.querySelectorAll('text-element');

  textToolElements.forEach((element: any) => {
    console.log(element);
    return element.addEventListener('mousedown', mousedown(element));
  });

  useEffect(() => {
    // source.getSourceCodebyId(router.query.id as string, setCurrentSource);
    if (localStorage.getItem('GLOBAL_SOURCE')) {
      const source = new InterfaceIntegration(new DatabaseService());
      const sourceCode = source.getProjectBasedSourceCode(
        router.query.id as string
      );
      setCurrentSource(sourceCode);
    } else return setCurrentSource('');
  }, [localStorage.getItem('GLOBAL_SOURCE')]);
  return (
    <motion.div className="w-full bg-interface-bg">
      <motion.div
        animate={{ opacity: [0, 1], y: [10, 0] }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="h-[95%]"
      >
        <p className="flex justify-center mt-10 text-[50px] welcome-color">
          SlobyBuilder
        </p>
        <div className="ml-2 mt-3">
          {currentSource !== undefined ? parse(currentSource) : ''}
        </div>
      </motion.div>
    </motion.div>
  );
}
