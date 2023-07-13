//Fabrica Abstracta
class AbstractFactory{
    createProductA(){  //sillas
        throw new Error("Metodo crear Silla no se puede implementar")
    }
    createProductB(){  //mesitas
        throw new Error("Metodo crear Silla no se puede implementar")
    }
}
//Fabrica Concreta 1   // Muebles Clasicos
class CroncreteFactory1 extends AbstractFactory{
    createProductA(){  //sillas
        return new ConcreteProductoA1()
    }
    createProductB(){  //mesitas
        return new ConcreteProductoB1()
    }
}
//Fabrica Concreta 2   // Muebles Deco
class CroncreteFactory2 extends AbstractFactory{
    createProductA(){  //sillas
        return new ConcreteProductoA2()
    }
    createProductB(){  //mesitas
        return new ConcreteProductoB2()
    }
}

//Producto Abstracto A   // Sillas
class AbstractProductA{
    operationA(){
        throw new Error("Metodo de las Sillas no se puede implementar")
    }
}
//Producto Concreto A1 //Sillas Clasicas
class ConcreteProductoA1 extends AbstractProductA{
    operationA(){
        console.log("Metodo de las sillas clasicas")
    }
}
//Producto Concreto A2 //Sillas Deco
class ConcreteProductoA2 extends AbstractProductA{
    operationA(){
        console.log("Metodo de las sillas deco")
    }
}

//Producto Abstracto B   // Mesitas
class AbstractProductB{
    operationB(){
        throw new Error("Metodo de las Mesitas no se puede implementar")
    }
}
//Producto Concreto B1 //Mesitas Clasicas
class ConcreteProductoB1 extends AbstractProductB{
    operationB(){
        console.log("Metodo de las mesitas clasicas")
    }
}
//Producto Concreto B2 //mesitas Deco
class ConcreteProductoB2 extends AbstractProductB{
    operationB(){
        console.log("Metodo de las mesitas deco")
    }
}

//uso del Abstract Factory
function clienteCodigo(factory){
    const productoA = factory.createProductA()
    const productoB = factory.createProductB()

    productoA.operationA()
    productoB.operationB()
}

//uso del Abstrct Factory con una fabrica concreta (clasica)
const factory1 = new CroncreteFactory1()
clienteCodigo(factory1)

//uso del Abstrct Factory con una fabrica concreta (deco)
const factory2 = new CroncreteFactory2()
clienteCodigo(factory2)