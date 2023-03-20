// convert the code into html

export type TElement = {
  type: string; // html tag name div | p | h | etc.
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
  source_code: string; // the source code as a string

  constructor() {
    this.source_code = '';
  }
  // scannes the element and returns the source code as a string
  scanner(element: TElement) {
    const element_type: string = this.identify_element(element);

    switch (element_type) {
      case 'p': // if the element is a paragraph
        this.adder(this.inputToParagraph(element));
        break;

      default: // if the element is not supported
        '';
    }
  }

  private adder(code: string) {
    // add the code to the source code
    this.source_code += code;
  }

  private identify_element(element: TElement): string {
    // Used to identify and return the element type(tag) div | p | h | etc.
    return element.type;
  }

  private inputToParagraph(element: TElement) {
    // convert the input element to a paragraph element
    const positionObject = {
      position: 'absolute',
      top: element.position?.y,
      left: element.position?.x,
    };

    //returns the actual source code as a string
    return `
  <div style=${JSON.stringify(positionObject)}>
    <p style=${JSON.stringify(element.style)}>
      ${element.value}
    </p>
  </div>
`;
  }
}
