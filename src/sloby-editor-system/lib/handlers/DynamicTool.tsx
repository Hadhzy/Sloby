import { BaseTool } from '../../utils/abstracts';
import { toolsConstructors } from '../../utils/constants';

export class DynamicTool {
  constructor(currentToolName: string, args?: any) {
    return new toolsConstructors[currentToolName](args).resolve() as BaseTool;
  }
}
