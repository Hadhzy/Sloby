import {
  TCurrentRoute,
  TSlobyProject,
  TSourceCodeBase,
} from '../../../../utils/types';
import { DbManager } from '../../indexDB';
import ProjectsSourceHandler from './ProjectsSourceHandler';
import { ScoopaBase } from 'scoopabase';

export default class interfaceIntegrator extends DbManager<TSourceCodeBase> {
  private static readonly tableName = 'project_local_db';
  constructor() {
    super(interfaceIntegrator.tableName, new ScoopaBase(DbManager.dbName));
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

  public async getProjectBasedSourceCode(id: string) {
    if (await !this.getSingle(id)) return;
    return await this.getSingle(id);
  }
}
