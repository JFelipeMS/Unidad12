//Prototype
class Prototype{   //cuenta de ahorros
    constructor(){
        this.property = 50000  //saldo por defecto
    }
    clone(){
        const clone = Object.create(Object.getPrototypeOf(this))
        clone.property = this.property
        return clone
    }
}

//Uso
const prototipo = new Prototype()
const clone1 = prototipo.clone() 
const clone2 = prototipo.clone()

console.log(clone1.property)
console.log(clone2.property)
console.log(clone1 === clone2)

clone2.property = 75000  //subo el saldo
console.log(clone1.property)
console.log(clone2.property)
console.log(clone1 === clone2)
