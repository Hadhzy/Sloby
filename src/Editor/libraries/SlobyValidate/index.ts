import { ISlobyValidate,ISlobyValidateState } from './../../types/index';
import React from "react"
import { IEventType } from "../../types"


export default class SlobyValidate {
    inputList: string[];


    constructor(public inputs: any) {
        this.inputList = [...Object.getOwnPropertyNames(this.inputs)]
        this.inputs = this.handleChange
    }

    handleChange(e: IEventType) {
        this.inputs = { ...this.inputs, [e.currentTarget.name]: e.currentTarget.value }
    }

    submit(e: IEventType, condition: string) {
        e.preventDefault()
        console.log("submitting the essential form")
        const inputsAreFilled = this.checkInputIsFilled()
        const conditionImplemented = inputsAreFilled && this.conditionImplementation(condition)
        if(!conditionImplemented) return console.log("Please fill all of the forms")
        return console.log("The condition is implemented")
    }

    checkInputIsFilled() {
        const properties = Object.values(this.inputs)
        const inputsAreEmptyString= properties.every(element => element === "") || properties.some(element => element === "")
        if (inputsAreEmptyString) return false 
        return true
    }

    conditionImplementation(condition: string) {
        return true
    }
}

class SlobyValidateError {
    constructor(public message: string) { }
}
