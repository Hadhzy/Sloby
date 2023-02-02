import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const fontNames: { name: string }[] = [
  { name: 'aboreto' },
  { name: 'itim' },
  { name: 'montserrat' },
  { name: 'raleway' },
  { name: 'roboto' },
];

const font: any = {
  aboreto: 'font-aboreto',
  itim: 'font-itim',
  montserrat: 'font-montserrat',
  raleway: 'font-raleway',
  roboto: 'font-roboto',
};

export default function Font() {
  const [visibilityState, setVisibilityState] = useState(['max-h-96']);
  const [rotateState, setRotateState] = useState(['rotate-0']);
  const [selectedFont, setSelectedFont] = useState('');

  function collapseToggle() {
    if (visibilityState[0] == 'max-h-0') {
      setVisibilityState(['max-h-96']);
      setRotateState(['rotate-0']);
    } else {
      setVisibilityState(['max-h-0']);
      setRotateState(['rotate-180']);
    }
  }

  function changeFont(font: string) {
    setSelectedFont(font);
  }

  // function handler(e: any) {
  //  setSelectedColor(e.target.value);
  // }

  return (
    <div className="flex flex-col bg-tool-bg rounded lg p-3 mt-3">
      <div onClick={collapseToggle} className="flex justify-between px-4">
        <h6>Font:</h6>
        <div className={`${font[selectedFont]} capitalize`}>{selectedFont}</div>
        <button>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`${rotateState} transition-all h-6 duration-300 linear hover:scale-110`}
          />
        </button>
      </div>
      <div
        className={`${visibilityState}  transition-all ease-in duration-600 overflow-hidden`}
      >
        {fontNames.map((e: any) => {
          return (
            <div
              onClick={() => changeFont(e.name)}
              className={`${font[e.name]} p-2`}
            >
              Whereas recognition of the inherent dignity.
            </div>
          );
        })}
      </div>
    </div>
  );
}
