// Handler
class Handler {
    constructor() {
      this.nextHandler = null;
    }
  
    setNextHandler(handler) {
      this.nextHandler = handler;
    }
  
    handleRequest(request) {
      throw new Error("handleRequest must be implemented by concrete handlers.");
    }
  }
  
  // Concrete Handler 1
  class ConcreteHandler1 extends Handler {
    handleRequest(request) {
      if (request === "Request1") {
        console.log("ConcreteHandler1: Handling Request1");
      } else if (this.nextHandler) {
        this.nextHandler.handleRequest(request);
      } else {
        console.log("ConcreteHandler1: Cannot handle the request.");
      }
    }
  }
  
  // Concrete Handler 2
  class ConcreteHandler2 extends Handler {
    handleRequest(request) {
      if (request === "Request2") {
        console.log("ConcreteHandler2: Handling Request2");
      } else if (this.nextHandler) {
        this.nextHandler.handleRequest(request);
      } else {
        console.log("ConcreteHandler2: Cannot handle the request.");
      }
    }
  }
  
  // Uso del Chain of Responsibility
  const handler1 = new ConcreteHandler1();
  const handler2 = new ConcreteHandler2();
  
  handler1.setNextHandler(handler2);
  
  handler1.handleRequest("Request1");
  handler1.handleRequest("Request2");
  handler1.handleRequest("Request3");
  