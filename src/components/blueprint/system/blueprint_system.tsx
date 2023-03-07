// Used to keep track the BluePrintChanges and represent the current state of the blueprint
import { TSlobyProject } from '../../../utils/types';

type Tblock = Array<TSlobyProject>;

export class BluePrint {
  private _start = false;
  private _blocks: Tblock = [];

  constructor() {
    this._start = true; // Blueprint is starte
  }

  private setup() {}

  get blocks(): Tblock {
    return this._blocks;
  }

  get length(): number {
    return this._blocks.length;
  }
}
