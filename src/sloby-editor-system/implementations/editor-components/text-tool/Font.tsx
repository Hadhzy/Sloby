import React from 'react';
import { useState, useEffect } from 'react';
import { Checkboard } from 'react-color';
import { TInputProps } from '../../../../utils/types';
const fontNames: { name: string }[] = [
  { name: 'aboreto' },
  { name: 'itim' },
  { name: 'montserrat' },
  { name: 'raleway' },
  { name: 'roboto' },
];

const font: { [key: string]: string } = {
  aboreto: 'font-aboreto',
  itim: 'font-itim',
  montserrat: 'font-montserrat',
  raleway: 'font-raleway',
  roboto: 'font-roboto',
};

export default function Font(props: TInputProps) {
  const [popUpState, setPopUpState] = useState<boolean>(false);
  const [selectedFont, setSelectedFont] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedWeight, setSelectedWeight] = useState('');
  const [italic, setItalic] = useState(false);

  useEffect(() => {
    if (props?.styles.fontStyle) {
      setItalic(props.styles.fontStyle);
    }
    if (props?.styles.fontFamily) {
      setSelectedFont(props.styles.fontFamily);
    }
    if (props?.styles.fontSize) {
      setSelectedSize(props.styles.fontSize);
    }
    if (props?.styles.fontWeight) {
      setSelectedWeight(props.styles.fontWeight);
    }
  }, [props.styles]);

  function changeFont(font: string) {
    setSelectedFont(font);
    props.styleChange(font, props.lastClicked, 'fontFamily');
  }

  function changeSize(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedSize(e.target.value);
    props.styleChange(e.target.value, props.lastClicked, 'fontSize');
  }

  function changeWeight(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedWeight(e.target.value);
    props.styleChange(e.target.value, props.lastClicked, 'fontWeight');
  }
  function changeItalic(e: React.ChangeEvent<HTMLInputElement>) {
    if (!italic) {
      props.styleChange('italic', props.lastClicked, 'fontStyle');
    } else {
      props.styleChange('', props.lastClicked, 'fontStyle');
    }
    setItalic(!italic);
  }

  return (
    <div>
      <div className="flex flex-col relative bg-tool-bg  rounded-lg p-2 mt-3">
        <div
          onClick={() => setPopUpState(!popUpState)}
          className="flex justify-between   px-4"
        >
          <h6>Font:</h6>
          <div className={`${font[selectedFont]} capitalize`}>
            {selectedFont}
          </div>
        </div>
        {popUpState ? (
          <div
            className={`absolute  left-0 bot-0 bg-[#181818] py-3 px-2 w-full  mt-6 rounded-b-lg`}
          >
            <div>
              <div className="flex mt-4 gap-4 ">
                <label>Size</label>
                <select
                  value={selectedSize}
                  className="bg-tool-bg px-3 py-1 text-sm"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    changeSize(e)
                  }
                >
                  <option value={'8px'}>very small</option>
                  <option value={'12px'}>small</option>
                  <option value={'16px'}>standard</option>
                  <option value={'22px'}>big</option>
                  <option value={'30px'}>very big</option>
                </select>
              </div>
              <div className="flex gap-4 mt-3">
                <label>weight</label>
                <select
                  value={selectedWeight}
                  className="bg-tool-bg px-3 py-1 text-sm "
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    changeWeight(e)
                  }
                >
                  <option value={'200'}>slim</option>
                  <option value={'500'}>standard</option>
                  <option value={'800'}>bold</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4 mt-3">
              <div>Italic:</div>
              <input
                type="checkbox"
                checked={italic}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  changeItalic(e)
                }
              ></input>
            </div>
            {fontNames.map((fontName: { name: string }) => {
              return (
                <div
                  onClick={() => changeFont(fontName.name)}
                  className={`${font[fontName.name]} p-2`}
                  key={fontName.name}
                >
                  Whereas recognition of the inherent dignity.
                </div>
              );
            })}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
