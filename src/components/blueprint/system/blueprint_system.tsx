// Used to keep track the BluePrintChanges and represent the current state of the blueprint, as a schema. 
import { TSlobyProject } from '../../../utils/types';

type Tblock = Array<TSlobyProject>;


export default function GetSlobyProjectSource<TSlobyProject>(project_id: string){ 
  // return the current user project information(interface_source)
  
}


export class BluePrint {
  private _start = false;
  private _blocks: Tblock = [];
  private _project_source: any;

  static _project_id: string = "";
  
  // Singleton pattern
  private static _instance: BluePrint;

  constructor(project_id: string) {
    this._start = true; // Blueprint is starte
    

    this._project_source = this.setup(); // setup the blueprint for the first_time
  }

  getInstance(): BluePrint { 
    // Singleton pattern
    if (!BluePrint._instance) {
      BluePrint._instance = new BluePrint(BluePrint._project_id); // create the instance of the blueprint(same instance)
    }
    return BluePrint._instance; // return the instance of the blueprint(same instance)

  }
  private setup() {
    // setup the blueprint for the first_time and return the first source_code.
    return GetSlobyProjectSource(BluePrint._project_id)
  }

  get blocks(): Tblock {
    // return the blocks of the blueprint
    return this._blocks;
  }

  get length(): number {
    // return how many blocks there are in the blueprint
    return this._blocks.length;
  }
}
