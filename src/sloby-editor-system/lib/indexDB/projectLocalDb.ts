import { ScoopaBase } from "scoopabase";
import { DbManager } from "./dbManager";

type TEST = {
    id: string
    name: string
    age: number
}

export class ProjectLocalDb extends DbManager<TEST>  { //  here we will pas the type like TSlobyProject

    private static readonly tableName = 'project_local_db';

    constructor() {
        super(ProjectLocalDb.tableName, new ScoopaBase(DbManager.dbName));
    }

}