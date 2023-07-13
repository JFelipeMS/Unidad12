// Estado base
class State {
    constructor(context) {
      this.context = context;
    }
  
    handle() {
      throw new Error("El método handle debe ser implementado por los estados concretos");
    }
  }
  
  // Contexto
  class Context {
    constructor() {
      this.state = null;
    }
  
    setState(state) {
      this.state = state;
      console.log(`Contexto: Estado establecido a ${state.constructor.name}`);
    }
  
    request() {
      this.state.handle();
    }
  }
  
  // Estado concreto 1
  class ConcreteState1 extends State {
    handle() {
      console.log("ConcreteState1: Manejando la solicitud en el estado 1");
      this.context.setState(new ConcreteState2(this.context));
    }
  }
  
  // Estado concreto 2
  class ConcreteState2 extends State {
    handle() {
      console.log("ConcreteState2: Manejando la solicitud en el estado 2");
      this.context.setState(new ConcreteState1(this.context));
    }
  }
  
  // Uso del State
  const context = new Context();
  const state1 = new ConcreteState1(context);
  const state2 = new ConcreteState2(context);
  
  context.setState(state1);
  
  context.request();
  context.request();
  context.request();
  