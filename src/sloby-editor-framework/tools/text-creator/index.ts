/* eslint-disable @typescript-eslint/no-useless-constructor */
import { SlobyStateHandler } from "../../handlers/SlobyStateHandler";
import { SlobyBaseTool } from "../../utils/abstracts";
import { SlobyTextCreationTool } from "../../utils/interfaces";

export default class TextCreationTool extends SlobyStateHandler implements SlobyTextCreationTool  {
  constructor() {
    super()
  }
}