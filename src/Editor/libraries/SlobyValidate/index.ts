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

    submit(e: IEventType) {
        e.preventDefault()
    }
}
