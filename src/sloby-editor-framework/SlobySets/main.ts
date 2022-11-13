import { ExpectedSetValues, SlobySetType } from "./types"

export class SlobySet {
    subsets: ExpectedSetValues
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

    delete(element: ExpectedSetValues) {
        /**
         * Delete a particluar value from a set value
         */
        const isTheElementRelevant = this.singleElementCheckker(element)
        if (!isTheElementRelevant) throw new Error(`The set does not includes the property ${element}, you cannot delete it unless it is included`)
        const resolvedValues = this.values.filter(value => value !== element)
        this.values = resolvedValues
    }

    unionWith(unionSet: SlobySetType) {
        const unionVales = this.values.concat()
        return unionVales
    }

    getNumber() { return this.values.length }

    interSectionWith(intersectionSet: SlobySetType) {
        console.log(intersectionSet)
        // const intersectedValues = this.values.forEach(element => element === intersectionSet)
        // return intersectedValues
    }

    createSubSet(set: ExpectedSetValues) {
        
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
const set1 = new SlobySet([231, "a"])
set1.add(2)
console.log(set1)

// console.log(set1.getNumber())
// console.log(set2)