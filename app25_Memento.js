// Originator
class Originator {
    constructor() {
      this.state = null;
    }
  
    setState(state) {
      this.state = state;
      console.log(`Originator: Estado establecido a ${this.state}`);
    }
  
    createMemento() {
      console.log("Originator: Creando memento...");
      return new Memento(this.state);
    }
  
    restoreMemento(memento) {
      this.state = memento.getState();
      console.log(`Originator: Estado restaurado a ${this.state}`);
    }
  }
  
  // Memento
  class Memento {
    constructor(state) {
      this.state = state;
    }
  
    getState() {
      return this.state;
    }
  }
  
  // Caretaker
  class Caretaker {
    constructor() {
      this.mementos = [];
    }
  
    addMemento(memento) {
      this.mementos.push(memento);
    }
  
    getMemento(index) {
      return this.mementos[index];
    }
  }
  
  // Uso del Memento
  const originator = new Originator();
  const caretaker = new Caretaker();
  
  originator.setState("Estado 1");
  caretaker.addMemento(originator.createMemento());
  
  originator.setState("Estado 2");
  caretaker.addMemento(originator.createMemento());
  
  originator.setState("Estado 3");
  
  originator.restoreMemento(caretaker.getMemento(1));
  