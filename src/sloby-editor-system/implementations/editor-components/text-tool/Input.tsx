import React, { useState, useEffect, useContext } from 'react';
import { BaseClassNames } from '../../../lib/grammar/BaseClassNames';
import { v4 as uuidv4 } from 'uuid';
import InterfacePropsIntegrator from '../../../lib/handlers/InteraceIntegrators/InterfacePropsIntegrator';
import { ToolClickedContext } from '../../../../utils/contexts/ToolClicked';
import { handleClientScriptLoad } from 'next/script';

export default function Input() {
  const { toolClicked, setToolClicked } = useContext(ToolClickedContext);
  const props = new InterfacePropsIntegrator();

  // useEffect(() => {
  //   new InterfacePropsIntegrator().addInputValues()
  // }, [toolClicked]);

  return (
    <input
      placeholder="type your text here..."
      onClick={(e) => console.log(e.target)}
      type="text"
      onChange={(e: any) => props.addInputValues(e.target.id, e.target.value)}
      className={`border border-blue-600 hover:decoration-2 duration-75  decoration-blue-400 hover:underline ${BaseClassNames.BASIC_DIV} bg-transparent`}
    />
  );
}
