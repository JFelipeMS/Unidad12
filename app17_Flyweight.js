// FlyweightFactory
class FlyweightFactory {
    constructor() {
      this.flyweights = {};
    }
  
    getFlyweight(key) {
      if (!this.flyweights[key]) {
        this.flyweights[key] = new ConcreteFlyweight(key);
      }
      return this.flyweights[key];
    }
  }
  
  // Flyweight
  class Flyweight {
    constructor(key) {
      this.key = key;
    }
  
    operation(extrinsicState) {
      throw new Error("Operation must be implemented by concrete flyweights.");
    }
  }
  
  // Concrete Flyweight
  class ConcreteFlyweight extends Flyweight {
    operation(extrinsicState) {
      console.log(`Operation called on ConcreteFlyweight with key ${this.key}, extrinsicState: ${extrinsicState}`);
    }
  }
  
  // Uso del Flyweight
  const factory = new FlyweightFactory();
  
  const flyweight1 = factory.getFlyweight("key1");
  flyweight1.operation("state1");
  
  const flyweight2 = factory.getFlyweight("key2");
  flyweight2.operation("state2");
  
  const flyweight3 = factory.getFlyweight("key1");
  flyweight3.operation("state3");
  
  console.log(flyweight1 === flyweight3); // true
  