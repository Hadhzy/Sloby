// convert the code into html

type TElement = {
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

  scanner(element: TElement) {
    const element_type: string = this.identify_element(element);


    switch (element_type) {
      case 'p':

        this.adder(this.inputToParagraph(element));
        break;

      default:
        '';
    }
  }

  private adder(code: string) {
    this.source_code += code;
  }

  private identify_element(element: TElement): string {
    console.log(element)
    // Used to identify and return the element type(tag) div | p | h | etc.
    return element.type;
  }

  private inputToParagraph(element: TElement) {
    let positionObject = {
      position: 'absolute',
      top: element.position!?.y,
      left: element.position!?.x,
    };

    return `
  <div style=${JSON.stringify(positionObject)}>
    <p style=${JSON.stringify(element.style)}>
      ${element.value}
    </p>
  </div>
`;
  }
}
