import React, { useState } from 'react';
import { BaseClassNames } from '../../../lib/grammar/BaseClassNames';

export default function Input() {
  const [v, setV] = useState('');
  return (
    <input
      placeholder="type your text here..."
      type="text"
      onChange={(e) => setV(e.target.value)}
    />
  );
}
