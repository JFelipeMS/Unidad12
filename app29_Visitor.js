// Elemento base
class Element {
    accept(visitor) {
      throw new Error("El método accept debe ser implementado por elementos concretos");
    }
  }
  
  // Elemento concreto 1
  class ConcreteElement1 extends Element {
    accept(visitor) {
      visitor.visitConcreteElement1(this);
    }
  
    operation1() {
      console.log("Operación 1 realizada por el ConcreteElement1");
    }
  }
  
  // Elemento concreto 2
  class ConcreteElement2 extends Element {
    accept(visitor) {
      visitor.visitConcreteElement2(this);
    }
  
    operation2() {
      console.log("Operación 2 realizada por el ConcreteElement2");
    }
  }
  
  // Visitante
  class Visitor {
    visitConcreteElement1(element) {
      throw new Error("El método visitConcreteElement1 debe ser implementado por visitantes concretos");
    }
  
    visitConcreteElement2(element) {
      throw new Error("El método visitConcreteElement2 debe ser implementado por visitantes concretos");
    }
  }
  
  // Visitante concreto
  class ConcreteVisitor extends Visitor {
    visitConcreteElement1(element) {
      element.operation1();
      console.log("Visitor visitando ConcreteElement1");
    }
  
    visitConcreteElement2(element) {
      element.operation2();
      console.log("Visitor visitando ConcreteElement2");
    }
  }
  
  // Uso del Visitor
  const elements = [
    new ConcreteElement1(),
    new ConcreteElement2()
  ];
  
  const visitor = new ConcreteVisitor();
  
  elements.forEach((element) => {
    element.accept(visitor);
  });
  