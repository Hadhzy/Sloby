import { TModifierElement } from '../../utils/types';

export default class ElementModifier {
  constructor(private element: TModifierElement) {
    console.log(this.element);
  }
}
