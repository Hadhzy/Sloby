import { ToolCategory } from '../../../utils/types';
import SlobyService from '../../services/SlobyService';

export default function RegisterTool(tool_category: ToolCategory) {
  const service = new SlobyService();
  const data: Object = service.loadJson('tools.json');
  //@ts-expect-error
  data[tool_category] = {};
  service.saveJson('tools.json', JSON.stringify(data));

  return function (constructor: Function) {
    //@ts-expect-error
    data[tool_category] = constructor.name;
  };
}
