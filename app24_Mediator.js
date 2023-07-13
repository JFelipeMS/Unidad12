// Mediator
class Mediator {
    constructor() {
      this.colleague1 = null;
      this.colleague2 = null;
    }
  
    setColleague1(colleague1) {
      this.colleague1 = colleague1;
    }
  
    setColleague2(colleague2) {
      this.colleague2 = colleague2;
    }
  
    send(message, sender) {
      if (sender === this.colleague1) {
        this.colleague2.receive(message);
      } else if (sender === this.colleague2) {
        this.colleague1.receive(message);
      }
    }
  }
  
  // Colleague
  class Colleague {
    constructor(mediator) {
      this.mediator = mediator;
    }
  
    send(message) {
      this.mediator.send(message, this);
    }
  
    receive(message) {
      console.log(`Colleague received message: ${message}`);
    }
  }
  
  // Uso del Mediator
  const mediator = new Mediator();
  
  const colleague1 = new Colleague(mediator);
  const colleague2 = new Colleague(mediator);
  
  mediator.setColleague1(colleague1);
  mediator.setColleague2(colleague2);
  
  colleague1.send("Hello from colleague 1");
  colleague2.send("Hi from colleague 2");
  