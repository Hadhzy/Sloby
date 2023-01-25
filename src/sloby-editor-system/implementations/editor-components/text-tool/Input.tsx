import React from 'react';
import { BaseClassNames } from '../../../lib/grammar/BaseClassNames';

export default function Input() {
  return (
    <input
      className={`${BaseClassNames.BASIC_DIV} border outline-none bg-transparent border-blue-600 hover:decoration-2 duration-75  decoration-blue-400 hover:underline`}
    />
  );
}
