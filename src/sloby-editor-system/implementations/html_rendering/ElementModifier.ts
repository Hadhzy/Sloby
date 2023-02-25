type TElement = {
  value: string;
  id: string;
  position: { x: number; y: number };
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
    let positionObject = {
      position: 'absolute',
      top: element.position!?.y,
      left: element.position!?.x,
    };

    return `
      <div style=${JSON.stringify(positionObject)}>
        <p style=
        ${JSON.stringify(element.style)}>
          ${element.value}
      </p>
      </div>
    `;
  }
}
