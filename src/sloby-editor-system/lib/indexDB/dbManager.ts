import { ScoopaBase } from 'scoopabase';

export class DbManager<T> {
  private dbManager: ScoopaBase;
  private readonly tableName;
  public static readonly dbName = 'SlobyDB';

  constructor(tableName: string, dbManager: ScoopaBase) {
    this.dbManager = dbManager;
    this.tableName = tableName;
  }

  async add(object: any, key?: string) {
    await this.dbManager
      .collection(this.tableName)
      .add<T>(object, key || 'key');
  }

  public async getSingle(key: string): Promise<T> {
    const res = await this.dbManager.collection<T>(this.tableName).get(key);
    return res as T;
  }

  public async updateItem(key: string, updated_item: any) {
    return await this.dbManager
      .collection<T>(this.tableName)
      .update(updated_item, key);
  }

  public getAll() {
    return this.dbManager
      .collection<T>(this.tableName)
      .getAll()
      .then((res: any) => res)
      .catch((err) => err);
  }

  //removeOne
  //removeRange
  //custom funcs with filter(where, contains) ... etc
  //... etc
}
