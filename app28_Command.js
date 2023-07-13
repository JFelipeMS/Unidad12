// Receptor
class Receiver {
    executeAction() {
      console.log("Acción ejecutada por el receptor");
    }
  }
  
  // Comando
  class Command {
    constructor(receiver) {
      this.receiver = receiver;
    }
  
    execute() {
      throw new Error("El método execute debe ser implementado por comandos concretos");
    }
  }
  
  // Comando concreto
  class ConcreteCommand extends Command {
    execute() {
      this.receiver.executeAction();
    }
  }
  
  // Invocador
  class Invoker {
    constructor() {
      this.command = null;
    }
  
    setCommand(command) {
      this.command = command;
    }
  
    executeCommand() {
      this.command.execute();
    }
  }
  
  // Uso del Command
  const receiver = new Receiver();
  const command = new ConcreteCommand(receiver);
  const invoker = new Invoker();
  
  invoker.setCommand(command);
  invoker.executeCommand();
  