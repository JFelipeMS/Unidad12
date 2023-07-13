// Sujeto
class Subject {
    request() {
      console.log("Sujeto: Manejando la solicitud.");
    }
  }
  
  // Proxy
  class Proxy {
    constructor(subject) {
      this.subject = subject;
    }
  
    request() {
      if (this.checkAccess()) {
        this.subject.request();
        this.logAccess();
      }
    }
  
    checkAccess() {
      console.log("Proxy: Verificando acceso antes de la solicitud.");
      // Lógica para verificar el acceso
      return true;
    }
  
    logAccess() {
      console.log("Proxy: Registrando el acceso a la solicitud.");
      // Lógica para registrar el acceso
    }
  }
  
  // Uso del Proxy
  const subject = new Subject();
  const proxy = new Proxy(subject);
  
  proxy.request();
  