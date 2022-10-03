import React from "react"

class SlobyValidate {
    constructor(public name: string) { }
    
    generate() {
        return this.name
    }
}

const i = new SlobyValidate("name")
console.log(i.generate())

export default SlobyValidate