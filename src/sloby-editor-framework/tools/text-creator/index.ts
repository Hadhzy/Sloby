import { SlobyBaseTool } from "../../utils/abstracts";
import { SlobyTextCreationTool } from "../../utils/interfaces";

export default class TextCreationTool implements SlobyTextCreationTool, SlobyBaseTool {
  constructor() {}

   initializeTool(tool: string) {
    console.log(`${tool} has been initialized`)
    return true
  }

  status() { return "" }
}