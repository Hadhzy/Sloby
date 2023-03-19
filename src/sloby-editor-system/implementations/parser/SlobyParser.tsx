import { TElement } from '../html_rendering/ElementModifier';
import { tagMap } from './html_tags';
// Parser for the rendering based on the sourceCode -> TElement[]

/**
 * @param sourceCode =>  {
          type: 'p',
          value: 'asdasd',
          id: '7d788f69-3d28-4639-9d80-81d640d760b7',
          position: {
            x: 340,
            y: 95,
          },
          style: {
            color: '#FFFFFF',
            fontSize: '16px',
            fontWeight: '500',
            fontFamily: 'montserrat',
          },
          states: {
            isReadonly: true,
          },
          dimensions: {
            x: 224,
            y: 42,
          },
        },
 */
//

// {position: 'absolute', }

export class Token {
  /**
   * @param type => e.g div, p, h1, h2, h3, h4, h5, h6
   * @param value => e.g <p>content_here</p> -> ||"content_here"||
   */

  start_pos: number;
  end_pos: number;
  constructor(
    public id?: string,
    public type?: string,
    public props?: any,
    public value?: string,
    public position?: { x: number; y: number } | null
  ) {
    this.id = id; // unique id
    this.type = type;
    this.value = value;
    this.start_pos = 0; // in thhe sourceCode
    this.end_pos = 0; // in the sourceCode
    this.props = props;
    this.position = position;
  }
}

// sourceCode -> <p>content_here</p>
export default class _SlobyParser {
  sourceCode: TElement[];
  current_char: any; // represent the actual, current char in the sourceCode
  current_storage: any; // Used to store additional data which might be important to access throughout the logic
  constructor(sourceCode: TElement[]) {
    this.sourceCode = sourceCode; // The actual string sourceCode that gets passed in when calling the parser
  }

  private *tokenizer(): Generator<Token> {
    // Generator function
    const tokens: Token[] = []; // represents the tokens that will be returned
    let counter = 0;
    for (const item of this.sourceCode) {
      counter++;
      // ------------------------------------------
      const token = new Token(
        item.id,
        item.type,
        item.style,
        item.value,
        item.position
      );
      token.start_pos = counter;
      // ------------------------------------------
      yield token; // yield the token
    }
  }

  render() {
    // render the html based on the passed sourceCode
    return <>{this.parser()}</>;
  }

  //{x: 123, y: 123} => {position: 'absolute', top: ''}
  private position_to_style(position: { x: number; y: number }) {
    const new_obj = {
      position: 'absolute',
      left: `${position.x}px`,
      top: `${position.y}px`,
    };
    return new_obj;
  }
  private parser(): React.ReactNode {
    const tokens: React.ReactNode[] = [];
    for (const token of this.tokenizer()) {
      // ---------------------------------------

      const tag = new tagMap[token.type!]();
      // --------------------------------------
      console.log(token.props);
      tag.content = token.value;
      tag.props = token.props;
      tag.id = token.id;
      tag.position = this.position_to_style(token.position!);
      tokens.push(tag.render()); // add key prop to rendered element
    }
    return <>{tokens}</>;
  }
}

export function SlobyParser(sourceCode: TElement[]): React.ReactNode {
  // sourceCode -> represents the structure of the elements in STRING
  return new _SlobyParser(sourceCode).render();
}
