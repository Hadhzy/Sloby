import { BaseTool } from '../../utils/abstracts';
import { toolsConstructors } from '../../utils/constants';
import { TCurrentRoute } from '../../utils/types';
import InterfaceIntegration from './InterfaceIntegration';
import DatabaseService from '../services/DatabaseService';
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
    if (!toolsConstructors[currentToolName])
      throw new Error(
        `There is no such tool as ${currentToolName} included in the toolConstructors object, you need to create a tool handler class based on the BaseTool interface for it and add the class into the toolConstructors object.`
      );
    else if (
      toolsConstructors[currentToolName] &&
      toolsConstructors[currentToolName].prototype instanceof BaseTool
    ) {
      return new toolsConstructors[currentToolName](
        new InterfaceIntegration(new DatabaseService()),
        currentRoute as string
      ).resolve() as BaseTool;
    } else
      throw new Error(
        `Either the BaseTool abstract class has not been extended to the class of ${currentToolName} or it is being implemented uncorrectly.`
      );
  }
}
