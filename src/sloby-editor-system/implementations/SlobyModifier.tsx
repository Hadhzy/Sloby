import React from 'react';
import { motion } from 'framer-motion';
import Color from './editor-components/text-tool/Color';
import Font from './editor-components/text-tool/Font';

import { InputsContext } from '../../utils/contexts/Inputs';
import { useContext, useState, useEffect } from 'react';

export default function SlobyModifier() {
  const { styleChange, lastClicked, getStyles } = useContext(InputsContext);
  const [styles, setStyles] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    // check needed for inital load where lastClicked is empty string
    if (lastClicked) {
      setStyles(getStyles(lastClicked));
    }
  }, [lastClicked]);

  return (
    <div className="w-1/4 bg-tools-bg text-white">
      <motion.div
        transition={{ delay: 1.2, duration: 0.3 }}
        animate={{ opacity: [0, 1], scale: [0, 1] }}
        className="bg-sloby-tools-bg ml-3 mr-3 h-[92.2vh] w-50 rounded-xl mt-3 outline-none"
      >
        <div className="border-b border-editor-border-color items-center w-full flex justify-center h-14">
          <p className="text-lg font-semibold">Sloby Modifier</p>
        </div>
        <div className="ml-4 mt-4 font-semibold text-lg">
          <Color
            styleChange={styleChange}
            styles={styles}
            lastClicked={lastClicked}
          />
          <Font
            styleChange={styleChange}
            styles={styles}
            lastClicked={lastClicked}
          />
        </div>
      </motion.div>
    </div>
  );
}
