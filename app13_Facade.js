// Subsistemas
class SubsystemA {
    operationA() {
      console.log("Operación A del Subsistema A");
    }
  }
  
  class SubsystemB {
    operationB() {
      console.log("Operación B del Subsistema B");
    }
  }
  
  class SubsystemC {
    operationC() {
      console.log("Operación C del Subsistema C");
    }
  }
  
  // Facade
  class Facade {
    constructor() {
      this.subsystemA = new SubsystemA();
      this.subsystemB = new SubsystemB();
      this.subsystemC = new SubsystemC();
    }
  
    operation() {
      this.subsystemA.operationA();
      this.subsystemB.operationB();
      this.subsystemC.operationC();
    }
  }
  
  // Uso del Facade
  const facade = new Facade();
  facade.operation();
  