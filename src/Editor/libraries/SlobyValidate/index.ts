import { ISlobyValidate,ISlobyValidateState } from './../../types/index';
import React from "react"
import { IEventType } from "../../types"

export class SlobyValidate implements ISlobyValidate {
    public state: ISlobyValidateState = {
        inputNames: [],
        inputValues: []
    }
    
    constructor(public inputNames: Array<string>, public inputValues: Array<string>) { this.state = this.state }
    
    manageInputValues() {
        if (this.inputValues.length === 1 && this.inputValues.includes("")) {
            
        } 
    }

    handleChange(event: IEventType) {
    }
}
