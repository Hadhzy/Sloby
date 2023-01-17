import { TranslatedElement } from '../../utils/types';

export default class Html {
  generate(translate_to: TranslatedElement, translated_element: any) {
    switch (translate_to) {
      case 'div': {
        return `<div>${translated_element as string}</div>`;
      }
    }
  }
}
