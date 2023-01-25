import { TranslatedElement } from '../../utils/types';
import { BaseClassNames, colors } from './BaseClassNames';
import { v4 as uuidv4 } from 'uuid';
import SlobyInput from '../../../components/SlobyInput';
import JsxParser from 'react-jsx-parser';

export default class Html {
  constructor() {}
  /**This will take care of translating the html in order for the preview interface to use */
  generate(translate_to: TranslatedElement, translated_element: any): string {
    /**A method that will generate html based on what is being passed
     * @param {TranslatedElement} translate_to => it will tell that what html element should we translate the string to
     * @param {any} translated_element => The element that will be translated
     * @returns {string} the formatted html string with the translated element
     */
    switch (translate_to) {
      case 'div': {
        const colors = ['blue-600', 'green-600'];
        return `<div>
                <div className='w-full text-element'>
                <div className='${BaseClassNames.BASIC_DIV_PARENT}'>
                <div className='${
                  BaseClassNames.BASIC_DIV
                } border border-blue-600 hover:decoration-2 duration-75  decoration-blue-400 hover:underline'>${''}</div>
                <div className='bg-blue-600 mt-1 px-2 py-1 rounded-lg text-[11px]'>93 x 64</div>
              </div>
              </div>
        </div>`;
      }
    }
  }
}
