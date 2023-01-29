import { TCurrentRoute, TSlobyTool } from '../../../utils/types';
import { DynamicTool } from './DynamicTool';

export class ActionHandler {
  // This class will take care of handling the actions with the tools
  constructor(
    currentTool: TSlobyTool | undefined,
    currentRoute: TCurrentRoute
  ) {
    /**
     * @returns DynamicTool
     * @param {TSlobyTool | undefined} currentTool => this is the current tool that the action has been made
     * @param {string} currentRoute => the current route that the action has been triggered from
     */
    return new DynamicTool(currentTool?.tool_name as string, currentRoute);
  }
}
