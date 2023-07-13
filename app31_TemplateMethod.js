// Clase base para el Template Method
class AbstractClass {
    templateMethod() {
      this.baseOperation1();
      this.requiredOperation1();
      this.baseOperation2();
      this.hook();
    }
  
    baseOperation1() {
      console.log("Operación base 1 realizada");
    }
  
    baseOperation2() {
      console.log("Operación base 2 realizada");
    }
  
    hook() {}
  }
  
  // Clase concreta que extiende AbstractClass
  class ConcreteClass extends AbstractClass {
    requiredOperation1() {
      console.log("Operación requerida 1 realizada por la clase concreta");
    }
  
    hook() {
      console.log("Hook implementado por la clase concreta");
    }
  }
  
  // Uso del Template Method
  const concreteClass = new ConcreteClass();
  concreteClass.templateMethod();
  