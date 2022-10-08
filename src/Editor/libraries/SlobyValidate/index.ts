import { ISlobyValidate,ISlobyValidateState } from './../../types/index';
import React from "react"
import { IEventType } from "../../types"





export class SlobyValidate {
    [key: string]: any
    inputNames: any;
    
    constructor(inputNamesList: Array<string>, inputValues: Array<string>) { 
        this.inputNames = {}
        this.inputNames.inputNamesList = inputNamesList
        // this.inputNamesList.forEach((item: string) => {
        //     this.inputNames[item] = item
        // })
    }


    setInputNames() {
        console.log("setting")
    }


    // manageInputValues() {
    //     if (this.inputValues.length === 1 && this.inputValues.includes("")) {

    //     } 
    // }

   

    handleChange(event: IEventType) {
        console.log("handleing the cahnge")
    }
}
