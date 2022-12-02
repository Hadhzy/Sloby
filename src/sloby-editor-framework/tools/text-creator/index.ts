/* eslint-disable @typescript-eslint/no-useless-constructor */
import { SlobyStateHandler } from '../../handlers/SlobyStateHandler'
import { SlobyTextCreationTool } from '../../utils/interfaces'

export default class TextCreationTool
  extends SlobyStateHandler
  implements SlobyTextCreationTool
{
  constructor() {
    super()
  }
}
