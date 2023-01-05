import { ToolCategory } from "../../../utils/types";

export default function RegisterTool(tool_category: ToolCategory) {
  console.log(tool_category)

  return function(constructor: Function) {}
}