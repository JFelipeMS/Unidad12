// Contexto
class Context {
    constructor(input) {
      this.input = input;
      this.output = 0;
    }
  }
  
  // Expresión
  class Expression {
    interpret(context) {
      throw new Error("El método interpret debe ser implementado por expresiones concretas");
    }
  }
  
  // Expresión numérica
  class NumberExpression extends Expression {
    constructor(number) {
      super();
      this.number = number;
    }
  
    interpret(context) {
      context.output = this.number;
    }
  }
  
  // Expresión suma
  class AddExpression extends Expression {
    constructor(expression1, expression2) {
      super();
      this.expression1 = expression1;
      this.expression2 = expression2;
    }
  
    interpret(context) {
      this.expression1.interpret(context);
      const prevOutput = context.output;
  
      this.expression2.interpret(context);
      context.output = prevOutput + context.output;
    }
  }
  
  // Uso del Interpreter
  const context = new Context("1+2+3");
  
  const expression1 = new NumberExpression(parseInt(context.input));
  const expression2 = new AddExpression(expression1, new NumberExpression(2));
  const expression3 = new AddExpression(expression2, new NumberExpression(3));
  
  expression3.interpret(context);
  
  console.log(`Resultado: ${context.output}`);
  