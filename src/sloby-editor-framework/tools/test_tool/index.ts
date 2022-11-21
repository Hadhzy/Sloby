import { SlobyBaseTool } from "../../utils/abstracts";

export default class TestTool implements SlobyBaseTool {
  constructor() {}

   initializeTool(tool: string) {
    console.log(`${tool} has been initialized`)
    return true
  }

  status() { return "" }
}