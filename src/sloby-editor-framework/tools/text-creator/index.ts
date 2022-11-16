import { SlobyTextCreationTool } from "../../utils/interfaces";

export default class TextCreationTool implements SlobyTextCreationTool {
  constructor() {}

  public method(name: string) {
    console.log(`${name} has been initialized`)
  }
}