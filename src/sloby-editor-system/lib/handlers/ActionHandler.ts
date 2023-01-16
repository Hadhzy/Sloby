import { TSlobyTool } from '../../../utils/types';
import { DynamicTool } from './DynamicTool';

export class ActionHandler {
  /** This class will take care of handling the actions with the tools
   * @param currentTool => this is the current tool that the action has been triggered
   */
  constructor(currentTool: TSlobyTool | undefined) {
    /**
     * @returns DynamicTool
     */
    return new DynamicTool(currentTool?.tool_name as string);
  }
}
