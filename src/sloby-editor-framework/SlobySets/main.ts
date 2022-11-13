import { ExpectedSetValues, SlobySetType } from "./types"

export class SlobySet {
    subsets: ExpectedSetValues
    constructor(public values: ExpectedSetValues[]) {
        this.subsets = []
    }
    
    add(addedValues: ExpectedSetValues | ExpectedSetValues[]) {
        /**
         * Add a particular value to a set
         */
        const isTheValueWronglyDeclered = Array.isArray(addedValues) && addedValues.length <= 1
        if(isTheValueWronglyDeclered) throw new Error(`If you are trying to add multiple values into your set, make sure that you add at least two in an Array, otherwise add just a single value without arrays`)
        console.log("You are in the implementation zone")
    }

    delete(element: ExpectedSetValues) {
        /**
         * Delete a particluar value from a set value
         */
        const isTheElementRelevant = this.elementCheckker(element)
        if (!isTheElementRelevant) throw new Error(`The set does not includes the property ${element}, you cannot delete it unless it is included`)
        const resolvedValues = this.values.filter(value => value !== element)
        this.values = resolvedValues
    }

    getNumber() { return this.values.length }

    interSectionWith(intersectionSet: SlobySetType) {
        console.log(intersectionSet)
        // const intersectedValues = this.values.forEach(element => element === intersectionSet)
        // return intersectedValues
    }

    unionWith(unionSet: SlobySetType) {
        const unionVales = this.values.concat()
        return unionVales
    }

    private elementCheckker(element: ExpectedSetValues) {
        if (!this.values.includes(element)) return false
        return true
    }

    createSubSet(set: ExpectedSetValues) {
        
    }
}
const set1 = new SlobySet([231, "a"])
set1.add([1, 2])

// console.log(set1.getNumber())
// console.log(set2)