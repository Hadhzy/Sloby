import RegisterTool from '../../lib/decorators/common/RegisterTool';
import { ToolCategories } from '../../utils/constants';

export default class TextCreationTool {
  constructor() {
    console.log(`I am here in the ${this.constructor.name} class`);
  }
}
