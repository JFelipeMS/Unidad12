// Componente base
class Component {
    constructor(name) {
      this.name = name;
    }
  
    operation() {
      console.log(`Realizando operación en ${this.name}`);
    }
  
    add(component) {
      throw new Error("No se puede agregar un componente hijo.");
    }
  
    remove(component) {
      throw new Error("No se puede remover un componente hijo.");
    }
  
    getChild(index) {
      throw new Error("No se puede obtener un componente hijo.");
    }
  }
  
  // Hoja
  class Leaf extends Component {
    constructor(name) {
      super(name);
    }
  
    operation() {
      console.log(`Realizando operación en la hoja ${this.name}`);
    }
  }
  
  // Composite
  class Composite extends Component {
    constructor(name) {
      super(name);
      this.children = [];
    }
  
    operation() {
      console.log(`Realizando operación en el composite ${this.name}`);
      this.children.forEach((child) => {
        child.operation();
      });
    }
  
    add(component) {
      this.children.push(component);
    }
  
    remove(component) {
      const index = this.children.indexOf(component);
      if (index !== -1) {
        this.children.splice(index, 1);
      }
    }
  
    getChild(index) {
      if (index >= 0 && index < this.children.length) {
        return this.children[index];
      }
      return null;
    }
  }
  
  // Uso del Composite
  const composite1 = new Composite("Composite 1");
  const composite2 = new Composite("Composite 2");
  const leaf1 = new Leaf("Hoja 1");
  const leaf2 = new Leaf("Hoja 2");
  const leaf3 = new Leaf("Hoja 3");
  
  composite1.add(leaf1);
  composite1.add(composite2);
  composite2.add(leaf2);
  composite2.add(leaf3);
  
  composite1.operation();
  