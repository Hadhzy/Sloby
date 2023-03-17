import { tagMap } from './html_tags';
// Parser for the rendering based on the sourceCode -> string

/**
 * @param sourceCode => e.g <div style={"position":"absolute","top":233,"left":203}>
    <p style={"color":"#FFFFFF","fontSize":"16px","fontWeight":"500","fontFamily":"montserrat"}>
      asdasd
    </p>
  </div>
 */
//

//
function _is_tag_valid(tag: string) {
  const local_tag = tagMap[tag];
  if (local_tag) return true;
  else return false;
}

export class Token {
  /**
   * @param type => e.g div, p, h1, h2, h3, h4, h5, h6
   * @param value => e.g <p>content_here</p> -> ||"content_here"||
   */

  start_pos: number;
  end_pos: number;
  constructor(public type?: string, public props?: any, public value?: string) {
    this.type = type;
    this.value = value;
    this.start_pos = 0;
    this.end_pos = 0;
    this.props = {};
  }
}

// sourceCode -> <p>content_here</p>
export default class _SlobyParser {
  sourceCode: string;
  pos: number; // the current_char position in the sourceCode
  current_char: any; // represent the actual, current char in the sourceCode
  hold_on: string; // Used to store chars until the lexer find the meaning of it
  current_storage: any; // Used to store additional data which might be important to access throughout the logic
  constructor(sourceCode: string) {
    this.sourceCode = sourceCode; // The actual string sourceCode that gets passed in when calling the parser
    this.pos = 0; // Position of the current carachter in the string(text)
    this.current_char = this.sourceCode[this.pos]; //current char based on the string(text) and the current position
    this.hold_on = ''; // Used to store chars until the lexer find the meaning of it
    this.current_storage = null;
  }

  private advance() {
    // advance in the text
    this.pos += 1; // Increasing the position
    if (this.pos > this.sourceCode.length - 1) {
      // If the sourceCode has ended meaning that there is no more things to read in
      this.current_char = null; // Setting the current_char to null because then the while loop won't read the current_char
    } else {
      // Otherwise we are setting the current char based on the position of the string
      this.current_char = this.sourceCode[this.pos]; // if everything went well, just get the new current_char
    }
  }

  // <p style={{ color: 'red', backgroundColor: 'asd' }}>
  private inline_props() {
    const sth = { style: '{ "color": "red" }' };

    //
    let key = ''; // e.g style=
    let value = ''; //  {{color: "red"}}
    const props: any = {};
    let septum = false; // =

    while (this.current_char !== '>') {
      if (this.current_char == '=') {
        septum = true;
      }

      if (septum) {
        this.advance();

        if (this.current_char == '{') {
          // {{color: 12
          this.advance();

          while (this.current_char !== '}') {
            // style={{color: "red, backgroundColor: "asd"}}
            value += this.current_char;
            this.advance();
          }
        }
      } else {
        key += this.current_char;
        this.advance();
      }
    }

    // value/props last touch
    value += '}';
    // const designed_value = JSON.parse(value.replace(/'/g, '"'));
    const parsedObject = eval(`(${value.replace(/'/g, '"')})`);
    if (key && props) {
      props[key] = parsedObject;
    }
    console.log(props);
    return props;
  }
  private get_tag_content() {
    // Return the content between a tag -> <p>content_here</p> -> content_here
    let tag_content = ''; // Catch the content

    while (this.current_char !== '<') {
      tag_content += this.current_char;
      this.advance();
    }
    return tag_content;
  }

  private skip_whitespace() {
    // Used to skip white_space during the lexer process
    console.log('skipping whitespace');
    while (this.current_char === ' ') {
      this.advance();
    }
  }

  private _get_tag() {
    const cleanTag = this.hold_on.replace('<', '').replace('>', '');
    return cleanTag;
  }

  private hold_on_validator(): any {
    // check if the hold_on variable contains a html tag, so we can return it or if its not a html tag, return false

    if (this.hold_on.startsWith('<') && this.hold_on.endsWith('>')) {
      return this._get_tag();
    }

    return false; // if its not a valid html tag
  }

  private is_props_relevant() {
    const splitted = this.hold_on.split('<');

    // check if it's time to check for props in the tag <p
    if (
      this.hold_on_validator() == false &&
      this.hold_on.startsWith('<') &&
      _is_tag_valid(splitted[1])
    ) {
      return true;
    }
    return false;
  }

  private get_next_token() {
    // sloby lexer/tokenizer -> return a html tag as a next token
    while (this.current_char !== null) {
      if (this.current_char === ' ') {
        this.skip_whitespace(); // skip the white_space
      }
      const token = new Token();
      // Execute the validator
      const validator = this.hold_on_validator();

      if (this.is_props_relevant()) {
        this.current_storage = this.inline_props();
        console.log('token_props', token.props);
      }

      if (validator) {
        // its a valid TOKEN
        token.type = validator;
        token.value = this.get_tag_content();
        token.props = this.current_storage;
        console.log('in validator', token.props);
        return token;
      }

      this.hold_on += this.current_char; // Extend the hold_on
      this.advance(); // if its not null but we dont know what it is yet, we store it in the hold_on variable
    }
  }

  render() {
    // render the html based on the passed sourceCode
    return <>{this.parse(this.sourceCode)}</>;
  }

  private parse(sourceCode: string) {
    //responsible for the parsing process
    const current_token: any = this.get_next_token(); // return a new Token instance

    const tag = new tagMap[current_token.type]();
    tag.content = current_token.value;
    console.log('current_token.props', current_token.props);
    tag.props = current_token.props;
    return tag.render();
  }
}

export function SlobyParser(sourceCode: string): React.ReactNode {
  return new _SlobyParser(sourceCode).render();
}
