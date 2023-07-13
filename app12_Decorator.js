//componente base
class Component {
    operation() {
        console.log("metodo del componente base")
    }
}
//Decorador base
class Decorator {
    constructor(component){
        this.component = component
    }
    operation(){
        this.component.operation()
    }
}
// Decorar concreto
class ConcreteDecoratorA extends Decorator{
    operation(){
        super.operation()
        console.log("Funcionalidad adicional del Decorador A")
    }
}
// Decorar concreto
class ConcreteDecoratorB extends Decorator{
    operation(){
        super.operation()
        console.log("Funcionalidad adicional del Decorador B")
    }
}

//uso del Decorador
const micomponente = new Component()
const midecoradorA = new ConcreteDecoratorA(micomponente)
const midecoradorB = new ConcreteDecoratorB(midecoradorA) 

midecoradorB.operation()