//Definicion de las clases de producto
class ProductoA {
    constructor() {
        this.type = "Camion"
    }
    operation() {
        console.log("Manejo por camion")
    }
}
class ProductoB {
    constructor() {
        this.type = "Barco"
    }
    operation() {
        console.log("manejo por Barco")
    }
}
//Fabrica de Productos
class ProductFactory {
    createProduct(type) {
        switch (type) {
            case "Camion":
                return new ProductoA()
            case "Barco":
                return new ProductoB()
            default:
                throw new Error("tipo de procuto invalido")
        }
    }
}

//Uso del Factory
const factory = new ProductFactory()

const productoA = factory.createProduct("Camion")
productoA.operation()
console.log(productoA.type)

const productoB = factory.createProduct("Barco")
productoB.operation()
console.log(productoB.type)