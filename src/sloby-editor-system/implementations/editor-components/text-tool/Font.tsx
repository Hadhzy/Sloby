import { useState, useEffect } from 'react';
import { Checkboard } from 'react-color';

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

export default function Font(props: any) {
  const [popUpState, setPopUpState] = useState<string>('hidden');
  const [selectedFont, setSelectedFont] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedWeight, setSelectedWeight] = useState('');
  const [italic, setItalic] = useState(false);

  function collapseToggle() {
    if (popUpState == 'hidden') {
      setPopUpState('block');
    } else {
      setPopUpState('hidden');
    }
  }

  useEffect(() => {
    setSelectedFont(props.styles.fontFamily);
    setSelectedSize(props.styles.fontSize);
    setSelectedWeight(props.styles.fontWeight);
    setItalic(props.styles.fontStyle);
  }, [props.styles]);

  function changeFont(font: string) {
    setSelectedFont(font);
    props.styleChange(font, props.lastClicked, 'fontFamily');
  }

  function changeSize(e: any) {
    setSelectedSize(e.target.value);
    props.styleChange(e.target.value, props.lastClicked, 'fontSize');
  }

  function changeWeight(e: any) {
    setSelectedWeight(e.target.value);
    props.styleChange(e.target.value, props.lastClicked, 'fontWeight');
  }
  function changeItalic(e: any) {
    if (!italic) {
      props.styleChange('italic', props.lastClicked, 'fontStyle');
    } else {
      props.styleChange('', props.lastClicked, 'fontStyle');
    }
    setItalic(!italic);
  }

  return (
    <div className="flex flex-col relative bg-tool-bg rounded lg p-3 mt-3">
      <div onClick={collapseToggle} className="flex justify-between px-4">
        <h6>Font:</h6>
        <div className={`${font[selectedFont]} capitalize`}>{selectedFont}</div>
      </div>
      <div
        className={`${popUpState} absolute left-0 bot-0 bg-tool-bg py-3 px-2 w-full  mt-12`}
      >
        <div>
          <div className="flex gap-4">
            <label>Size</label>
            <select
              value={selectedSize}
              className="bg-tool-bg px-3 py-1 text-sm "
              onChange={changeSize}
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
              onChange={changeWeight}
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
            onChange={changeItalic}
          ></input>
        </div>
        {fontNames.map((e: any) => {
          return (
            <div
              onClick={() => changeFont(e.name)}
              className={`${font[e.name]} p-2`}
              key={e.name}
            >
              Whereas recognition of the inherent dignity.
            </div>
          );
        })}
      </div>
    </div>
  );
}
