// Implementación de la abstracción
class Abstraction {
    constructor(implementation) {
      this.implementation = implementation;
    }
  
    operation() {
      const implementationResult = this.implementation.operationImplementation();
      console.log(`Abstracción: ${implementationResult}`);
    }
  }
  
  // Implementación de la implementación
  class Implementation {
    operationImplementation() {
      throw new Error("Operation implementation must be defined");
    }
  }
  
  // Implementación concreta 1
  class ConcreteImplementationA extends Implementation {
    operationImplementation() {
      return "Operación de Implementación A";
    }
  }
  
  // Implementación concreta 2
  class ConcreteImplementationB extends Implementation {
    operationImplementation() {
      return "Operación de Implementación B";
    }
  }
  
  // Uso del Bridge
  const implementationA = new ConcreteImplementationA();
  const abstractionA = new Abstraction(implementationA);
  abstractionA.operation();
  
  const implementationB = new ConcreteImplementationB();
  const abstractionB = new Abstraction(implementationB);
  abstractionB.operation();
  