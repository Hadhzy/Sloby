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

export default class _SlobyParser {
  sourceCode: string;

  constructor(sourceCode: string) {
    this.sourceCode = sourceCode;
    this.setup();
    console.log(this.parse(sourceCode));
  }

  private setup() {
    console.log('do some setup');
  }

  render() {
    // render the html based on teh string
    return <div>asdasd</div>;
  }

  private parse(sourceCode: string) {
    const input = new tagMap['input']();

    return input.render();
  }
}

export function SlobyParser(sourceCode: string): React.ReactNode {
  return new _SlobyParser(sourceCode).render();
}
