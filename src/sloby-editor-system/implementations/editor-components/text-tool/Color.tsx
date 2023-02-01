import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
const colorNames: { name: string }[] = [
  { name: 'Black' },
  { name: 'White' },
  { name: 'Red' },
  { name: 'Green' },
  { name: 'Blue' },
  { name: 'Yellow' },
  { name: 'Gray' },
  { name: 'LightGray' },
  { name: 'Orange' },
  { name: 'Pink' },
  { name: 'Purple' },
  { name: 'Turqouise' },
  { name: 'Lime' },
  { name: 'Cyan' },
  { name: 'Silver' },
];
const color: any = {
  Black: 'bg-black',
  White: 'bg-white',
  Red: 'bg-red-500',
  Green: 'bg-green-500',
  Blue: 'bg-blue-500',
  Yellow: 'bg-yellow-500',
  Gray: 'bg-gray-500',
  LightGray: 'bg-gray-300',
  Orange: 'bg-orange-500',
  Pink: 'bg-pink-500',
  Purple: 'bg-purple-500',
  Turqouise: 'bg-teal-500',
  Lime: 'bg-lime-500',
  Cyan: 'bg-cyan-500',
  Silver: 'bg-gray-400',
};

export default function Color() {
  const [visibilityState, setVisibilityState] = useState(['max-h-96']);
  const [rotateState, setRotateState] = useState(['rotate-0']);
  const [selectedColor, setSelectedColor] = useState('Gray');

  function collapseToggle() {
    if (visibilityState[0] == 'max-h-0') {
      setVisibilityState(['max-h-96']);
      setRotateState(['rotate-0']);
    } else {
      setVisibilityState(['max-h-0']);
      setRotateState(['rotate-180']);
    }
  }

  function changeColor(color: string) {
    setSelectedColor(color);
  }

  // function handler(e: any) {
  //  setSelectedColor(e.target.value);
  // }

  return (
    <div className="flex flex-col bg-tool-bg rounded lg p-3">
      <div className="flex justify-between px-4">
        <h6>Color:</h6>
        <div className={`w-8 h-8 rounded-full ${color[selectedColor]}`}></div>
        <button onClick={collapseToggle}>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`${rotateState} transition-all h-6 duration-300 linear`}
          />
        </button>
      </div>
      <div
        className={`${visibilityState}  transition-all ease-in duration-600 overflow-hidden`}
      >
        <div className="flex flex-wrap gap-1 justify-center p-3">
          {colorNames.map((e: any) => {
            return (
              <div
                onClick={() => changeColor(e.name)}
                className={`${color[e.name]} w-10 h-10 rounded-full`}
              ></div>
            );
          })}
        </div>
        <hr className="mt-2"></hr>
        <div>color picker</div>
        {/* <input onChange={handler} type="color" id="color" /> */}
      </div>
    </div>
  );
}
