import { BaseTool } from '../../utils/abstracts';
import { toolsConstructors } from '../../utils/constants';
import { TCurrentRoute } from '../../utils/types';
import InterfaceIntegration from './InterfaceIntegration';

export class DynamicTool {
  /**A class which will be used to return the current activated tool class instance */

  constructor(
    currentToolName: string,
    currentRoute: TCurrentRoute,
    args?: any
  ) {
    /**
     * @param {string} currentToolName => the name of the current tool which has been activated
     * @param {any} args => the optional arguments that has been passed throught tool activation
     * @returns {class} => It'll return the proper tool class based on what tool has been activated
     */
    return new toolsConstructors[currentToolName](
      new InterfaceIntegration(),
      currentRoute as string
    ).resolve() as BaseTool;
  }
}
