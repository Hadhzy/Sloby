import RegisterTool from '../../lib/decorators/common/RegisterTool';
import { BaseTool } from '../../utils/abstracts';
import { ToolCategories } from '../../utils/constants';

export default class TextCreationTool extends BaseTool {
  constructor() {
    super();
  }

  resolve() {
    /**Decide whether the tool is for creating something or modifing something 
     * If the tool is for creating something then we need to get the communication with the websocket server
     * otherwise we need to interact with the preview interface
    */
  }
}
