import React, { useState } from 'react';
import { BaseClassNames } from '../../../lib/grammar/BaseClassNames';
import { v4 as uuidv4 } from 'uuid';

export default function Input() {
  return (
    <input
      placeholder="type your text here..."
      type="text"
      id={`${uuidv4()}`}
      className={`border border-blue-600 hover:decoration-2 duration-75  decoration-blue-400 hover:underline ${BaseClassNames.BASIC_DIV} bg-transparent`}
    />
  );
}
