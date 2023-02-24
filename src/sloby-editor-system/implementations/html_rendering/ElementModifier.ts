type TElement = {
  value: string;
  id: string;
  position: { x: number; 184: number };
  states: { isReadonly: boolean };
  style: {
    color: string;
    fontSize: string;
    fontWeight: string;
    fontFamily: string;
  };
  dimensions: { x: number; y: number };
};

export default class ElementModifier {
  inputToParagraph(element: TElement) {
    return `
      <p>
        ${element.value}
      </p>
    `;
  }
}
