import { ScoopaBase } from "scoopabase";

export class DbManager<T> {
    private dbManager: ScoopaBase;
    private readonly tableName;
    public static readonly dbName = 'SlobyDB';

    constructor(tableName: string, dbManager: ScoopaBase) {
        this.dbManager = dbManager;
        this.tableName = tableName;
    }

    async add(object: T) {
        await this.dbManager.collection(this.tableName).add<T>(object, 'key') // i really don't understand the key thingy but i will look it up
    }


    public async getSingle(): Promise<T> {
        const res = await this.dbManager.collection<T>(this.tableName).get('key');
        return res as T;
    }

    public getAll() {
        return this.dbManager.collection<T>(this.tableName);
        //here the data is printed successfully without any bugs
    }


    //removeOne
    //removeRange
    //custom funcs with filter(where, contains) ... etc
    //... etc




}