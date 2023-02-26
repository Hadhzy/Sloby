import React from 'react';
import { BaseClassNames, colors } from './BaseClassNames';
import SlobyInput from '../../../components/SlobyInput';
import JsxParser from 'react-jsx-parser';
import { TranslatedElement } from '../../../utils/types';

export default class Html {
  constructor() {}
  /**This will take care of translating the html in order for the preview interface to use */
  public generate(
    translate_to: TranslatedElement,
    translated_element: any
  ): string {
    /**A method that will generate html based on what is being passed
     * @param {TranslatedElement} translate_to => it will tell that what html element should we translate the string to
     * @param {any} translated_element => The element that will be translated
     * @returns {string} the formatted html string with the translated element
     */
    switch (translate_to) {
      case 'div': {
        return `<div>
        <div className="w-full text-element">
          <div className="flex flex-col w-max justify-center items-center">
            <Input />
          </div>
        </div>
      </div>`;
      }
    }
  }
}
