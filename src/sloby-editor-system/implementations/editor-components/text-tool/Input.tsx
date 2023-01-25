import React, { useState } from 'react';
import { BaseClassNames } from '../../../lib/grammar/BaseClassNames';

export default function Input() {
  return (
    <input
      placeholder="type your text here..."
      type="text"
      className={`border border-blue-600 hover:decoration-2 duration-75  decoration-blue-400 hover:underline ${BaseClassNames.BASIC_DIV} bg-transparent`}
    />
  );
}
