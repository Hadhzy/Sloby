import { ScoopaBase } from 'scoopabase';
import { DbManager } from '../../indexDB';
import { v4 as uuid } from 'uuid';

export default class InterfacePropsIntegrator extends DbManager<any> {
  private static readonly tableName = 'project_props_local_db';
  currentId: string;
  constructor() {
    super(InterfacePropsIntegrator.tableName, new ScoopaBase(DbManager.dbName));
    this.currentId = '';
  }

  public async addInputValues(id: string, value: string) {}

  public async handleInputValues(id: string, value: string) {
    return await this.add(value, id);
  }

  public async getInputValues(id: string) {
    return (await this.getSingle(id)) as string;
  }

  public async getInputId() {
    return await this.getSingle(this.currentId);
  }
}
