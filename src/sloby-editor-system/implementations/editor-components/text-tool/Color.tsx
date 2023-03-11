import { useEffect, useState } from 'react';

import { HuePicker } from 'react-color';
import { v4 as uuidv4 } from 'uuid';
import { TInputProps } from '../../../../utils/types';
import { motion } from 'framer-motion';

const pallets = [
  {
    name: 'Tropical Paradise',
    colors: ['#00b16a', '#1e824c', '#2ecc71', '#16a085', '#27ae60', '#2980b9'],
  },
  {
    name: 'Pastel Dreams',
    colors: ['#f5b7b1', '#f7dc6f', '#f9e79f', '#aed6f1', '#d2b4de', '#85c1e9'],
  },
  {
    name: 'Rustic Charm',
    colors: ['#9b59b6', '#8e44ad', '#e67e22', '#d35400', '#e74c3c', '#c0392b'],
  },
];

export default function Color(props: TInputProps) {
  const [popUpState, setPopUpState] = useState<boolean>(false);
  const [recentlyUsed, setRecentlyUsed] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>('#fff');
  const [rotate, setRotate] = useState(['rotate-0']);

  useEffect(() => {
    if (props?.styles?.color !== undefined) {
      setSelectedColor(props.styles.color);
    } else return;
  }, [props.styles]);

  function changeColor(color: string) {
    setSelectedColor(color);
    props.styleChange(color, props.lastClicked, 'color');
  }

  useEffect(() => {
    if (recentlyUsed.includes(selectedColor)) return;
    const temp = recentlyUsed;
    if (temp.length == 6) {
      temp.unshift(selectedColor);
      temp.pop();
      setRecentlyUsed(temp);
    } else {
      temp.unshift(selectedColor);
      setRecentlyUsed(temp);
    }
  }, [selectedColor]);

  function palleteHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    for (let i = 0; i < pallets.length; i++) {
      if (pallets[i].name == e.target.value) {
        setRecentlyUsed(pallets[i].colors);
      }
    }
  }

  return (
    <div className="flex ease-in-out flex-col rounded-md duration-150 hover:bg-dark-border cursor-pointer w-full  bg-tool-bg p-3">
      <div
        onClick={() => setPopUpState(!popUpState)}
        className="flex gap-6 text-sm justify-start px-4"
      >
        <h6>Color:</h6>
        <div
          style={{ backgroundColor: selectedColor }}
          className={`w-5 ease-in-out duration-150 h-5 rounded-full hover:scale-105  ring-offset-1 hover:cursor-pointer ring-offset-back hover:dark-font-color ring-bl hover:ring-2`}
        ></div>
      </div>
      {popUpState ? (
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={`${popUpState} py-3 px-2 w-full H-ease-in-out duration-150  rounded-lg mt-8 bg-tool-bg z-10`}
        >
          <div className="flex gap-1 justify-center p-3">
            {uuidv4
              ? recentlyUsed.map((e: string, i) => {
                  return (
                    <div
                      key={uuidv4()}
                      style={{ backgroundColor: e }}
                      className={`w-6 h-6 rounded-full ease-in-out duration-150 hover:scale-105 ring-offset-1 hover:cursor-pointer ring-offset-back hover:dark-font-color ring-bl hover:ring-2`}
                      onClick={() => changeColor(e)}
                    ></div>
                  );
                })
              : ''}
          </div>
          <div className="flex flex-col gap-3 items-center p-3">
            <label className="text-xs">Palette</label>
            <select
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                palleteHandler(e)
              }
              className="bg-tool-bg text-xs w-full h-8 p-1"
            >
              {pallets.map((e) => {
                return (
                  <option key={e.name} value={e.name}>
                    {e.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="">
            <HuePicker
              color={selectedColor}
              onChangeComplete={(e: any) => changeColor(e.hex)}
              width={'200'}
              className="ease-in-out duration-150"
            />
          </div>
        </motion.div>
      ) : (
        ''
      )}
    </div>
  );
}
