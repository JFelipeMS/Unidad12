// Observador
class Observer {
    update(data) {
      throw new Error("El método update debe ser implementado por observadores concretos");
    }
  }
  
  // Sujeto
  class Subject {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notify(data) {
      this.observers.forEach((observer) => {
        observer.update(data);
      });
    }
  }
  
  // Observador concreto
  class ConcreteObserver extends Observer {
    update(data) {
      console.log(`Observador actualizado con data: ${data}`);
    }
  }
  
  // Uso del Observer
  const subject = new Subject();
  
  const observer1 = new ConcreteObserver();
  const observer2 = new ConcreteObserver();
  
  subject.addObserver(observer1);
  subject.addObserver(observer2);
  
  subject.notify("Nueva actualización");
  