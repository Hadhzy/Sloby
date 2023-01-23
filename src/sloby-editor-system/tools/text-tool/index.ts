import RegisterTool from '../../lib/decorators/common/RegisterTool';
import { colors } from '../../lib/grammar/BaseClassNames';
import HtmlTranslator from '../../lib/grammar/Html';
import InterfaceIntegration from '../../lib/handlers/InterfaceIntegration';
import { BaseTool } from '../../utils/abstracts';
import { BaseToolTemplates, ToolCategories } from '../../utils/constants';
import { TCurrentRoute } from '../../utils/types';

export default class TextCreationTool extends BaseTool {
  constructor(
    private interfaceIntegration: InterfaceIntegration,
    private currentRoute: TCurrentRoute
  ) {
    super();
  }

  resolve() {
    /**Decide whether the tool is for creating something or modifing something
     * If the tool is for creating something then we need to get the integration with the preview interface
     * otherwise we need to interact with the db and get the whole source code of the prview and apply the logic locally
     */
    this.interfaceIntegration.add(
      BaseToolTemplates.TEXT_CREATION_TOOL,
      this.currentRoute
    );
  }
}
