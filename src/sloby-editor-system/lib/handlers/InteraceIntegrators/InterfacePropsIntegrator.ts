import { ScoopaBase } from 'scoopabase';
import { DbManager } from '../../indexDB';

export default class InterfacePropsIntegrator extends DbManager<any> {
  private static readonly tableName = 'project_props_local_db';
  constructor() {
    super(InterfacePropsIntegrator.tableName, new ScoopaBase(DbManager.dbName));
  }

  public async addBaseProperties() {
    console.log('adding properties');
  }
}
