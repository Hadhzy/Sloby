import React, { useState } from 'react';
import { BaseClassNames } from '../../../lib/grammar/BaseClassNames';

export default function Input() {
  const [i, setI] = useState('');
  return (
    <input
      placeholder="type your text here..."
      value={i}
      onChange={(e: any) => setI(e.target.value)}
      onFocus={() => console.log('Hello')}
      type="text"
      className={`${BaseClassNames.BASIC_DIV} focus:decoration-none border outline-none bg-transparent border-blue-600 hover:decoration-2 duration-75  decoration-blue-400 hover:underline`}
    />
  );
}
