import { faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons';
import {
  TCurrentRoute,
  TSlobyProject,
  TSourceCodeBase,
} from '../../../../utils/types';
import { DbManager } from '../../indexDB';
import { ScoopaBase } from 'scoopabase';
import { v4 as uuidv4 } from 'uuid';

export default class interfaceSourceIntegrator extends DbManager<any> {
  private static readonly tableName = 'project_sources_local_db';
  currentInputId: boolean;
  constructor() {
    super(
      interfaceSourceIntegrator.tableName,
      new ScoopaBase(DbManager.dbName)
    );
    this.currentInputId = false;
  }

  public async injectBaseSourceCode(
    injected_code: string | any = '',
    currentRoute: TCurrentRoute
  ) {
    const data = await this.getSingle(currentRoute);
    if (data === null) {
      return this.add(injected_code, currentRoute);
    } else {
      return this.updateItem(currentRoute, data.concat(injected_code));
    }
  }

  public generateInputId() {
    return;
  }

  public async getProjectBasedSourceCode(id: string) {
    if (await !this.getSingle(id)) return;
    return await this.getSingle(id);
  }
}
