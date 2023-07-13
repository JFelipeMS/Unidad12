//Estrategia base
class Strategy{
    execute(){
        throw new Error ("El metodo debe ejecutarse desde las implementaciones")
    }
}
//Estartegia Concreta
class ConcreteStrategy1 extends Strategy {
    execute(){
        console.log("Yendo en Bicicleta")
    }
}
class ConcreteStrategy2 extends Strategy {
    execute(){
        console.log("Yendo en Bus")
    }
}
class ConcreteStrategy3 extends Strategy {
    execute(){
        console.log("Yendo en Taxi")
    }
}

// clase contexto
class Context {
    constructor(strategy) {
        this.strategy = strategy
    }
    setStrategy(strategy) {
        this.strategy = strategy
    }
    executeStrategy(){
        this.strategy.execute()
    }
}

//uso del Strategy
const estrategyBici = new ConcreteStrategy1()
const estrategyBus = new ConcreteStrategy2()
const estrategyTaxi = new ConcreteStrategy3()

const miviajealAeropuerto = new Context(estrategyBici)
miviajealAeropuerto.executeStrategy()
miviajealAeropuerto.setStrategy(estrategyBus)
miviajealAeropuerto.executeStrategy()
miviajealAeropuerto.setStrategy(estrategyTaxi)
miviajealAeropuerto.executeStrategy()