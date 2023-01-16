import RegisterTool from '../../lib/decorators/common/RegisterTool';
import { BaseTool } from '../../utils/abstracts';
import { ToolCategories } from '../../utils/constants';

export default class TextCreationTool extends BaseTool {
  constructor() {
    super();
  }

  resolve() {
    console.log(`Hello from ${this.constructor.name}`);
  }
}
