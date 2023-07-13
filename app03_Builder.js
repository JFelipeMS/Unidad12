//producto   //coche
class Product {
    constructor() {
        this.part1 = null  //puertas
        this.part2 = null  //asientos
        this.part3 = null  //tipo combustible
    }
    setPart1(part1){
        this.part1 = part1
    }
    setPart2(part2){
        this.part2 = part2
    }
    setPart3(part3){
        this.part3 = part3
    }
    display(){
        console.log(this.part1)
        console.log(this.part2)
        console.log(this.part3)
    }
}
//Builder
class Builder {
    constructor() {
        this.product = new Product()
    }
    buildPart1(part1){
        this.product.setPart1(part1)    
    }
    buildPart2(part2){
        this.product.setPart2(part2)    
    }
    buildPart3(part3){
        this.product.setPart3(part3)    
    }
    getProduct(){
        return this.product
    }
}

//Director opcional  //sedan a gasolina
class Director {
    construct(builder){
        builder.buildPart1(4)
        builder.buildPart2(5)
        builder.buildPart3("gasolina")
        return builder.getProduct()
    }
}

//como usarlo
const builder = new Builder()
const director = new Director()

const producto = director.construct(builder)
//console.log(typeof(producto))
producto.display()