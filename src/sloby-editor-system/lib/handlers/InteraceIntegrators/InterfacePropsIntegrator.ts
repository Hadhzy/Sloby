import { ScoopaBase } from 'scoopabase';
import { DbManager } from '../../indexDB';
import { TCurrentRoute } from '../../../../utils/types';

export default class InterfacePropsIntegrator extends DbManager<any> {
  private static readonly tableName = 'project_props_local_db';
  currentId: string;
  constructor() {
    super(InterfacePropsIntegrator.tableName, new ScoopaBase(DbManager.dbName));
    this.currentId = '';
  }
}
