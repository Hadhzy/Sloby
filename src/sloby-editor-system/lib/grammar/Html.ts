import { TranslatedElement } from '../../utils/types';
import { BaseClassNames, colors } from './BaseClassNames';

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
        return `<div className='w-full'>
          <div className='${BaseClassNames.BASIC_DIV_PARENT}'>
          <div className='${BaseClassNames.BASIC_DIV} border border-blue-600'>${
          translated_element as string
        }</div>
          <div className='bg-blue-600 mt-1 px-2 py-1 rounded-lg text-xs'>93 x 64</div>
        </div>
        </div>`;
      }
    }
  }
}
