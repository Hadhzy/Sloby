import { prependOnceListener } from "process"
import TextCreationTool from "../../tools/text-creator"
import { ExpectedSetValues, SlobySetType } from "./types"

export class SlobySet {
    subsets: SlobySetType[]
    constructor(public values: ExpectedSetValues[]) {
        this.subsets = []
    }

    add(addedValues: ExpectedSetValues) {
        /**
         * Add a particular value to a set, which can be either single element or a list of elements
         */
        const isTheValueWronglyDeclered = this.validateDeclaredError(addedValues)
        if(isTheValueWronglyDeclered) throw new Error(`If you are trying to add multiple values into your set, make sure that you add at least two values into the Array, otherwise add just a single value without arrays`)
        const areTheValuesMultiple = Array.isArray(addedValues) && addedValues.length > 1
        
        if(!areTheValuesMultiple) {
            console.log("Single element adder")
            const alreadyIncluded = this.singleElementCheckker(addedValues)
            if(!alreadyIncluded) return this.values.push(addedValues)
            return this.includedElementError(addedValues)
        } else {
            console.log("multiple element adder")
            const alreadyIncluded = this.multipleElementCheckker(addedValues)
            if(alreadyIncluded) throw new Error("The list of values that you trying to add, some of them are already in the set")
            return addedValues.forEach((value: ExpectedSetValues) => this.values.push(value))
        }
    }


    addSubSet(subset: SlobySetType) {
        const preparedSubSet = { ...subset }
        this.subsets = [...this.subsets, preparedSubSet]
    }

    private validateDeclaredError(addedValues: ExpectedSetValues) { 
        return Array.isArray(addedValues) && addedValues.length <= 1    
    }

    private includedElementError(element: ExpectedSetValues) {
        throw new Error(`${element} is already in the set`)
    }

    private singleElementCheckker(element: ExpectedSetValues) {
        if (!this.values.includes(element)) return false
        return true
    }

    private multipleElementCheckker(element_list: ExpectedSetValues[]) {
        /**
         * Check if a list of elements are already in the values of the set
         * TODO: Need to specify the included elements 
        */
        const elementsAreIncluded = element_list.some((element: ExpectedSetValues) => this.values.includes(element)) 
        return elementsAreIncluded
    }
}