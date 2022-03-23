export interface IExpression {
  interpret: (context: string) => boolean;
}

export class TerminalExpression implements IExpression {
  data!: string;
  constructor(data: string) {
    this.data = data;
  }
  interpret(context: string) {
    if (context.includes(this.data)) {
      return true;
    }
    return false;
  }
}

export class OrExpression implements IExpression {
  expression1!: IExpression;
  expression2!: IExpression;
  constructor(expression1: IExpression, expression2: IExpression) {
    this.expression1 = expression1;
    this.expression2 = expression2;
  }

  interpret(context: string) {
    const result: boolean =
      this.expression1.interpret(context) ||
      this.expression2.interpret(context);
    return result;
  }
}

export class AndExpression implements IExpression {
  expression1!: IExpression;
  expression2!: IExpression;
  constructor(expression1: IExpression, expression2: IExpression) {
    this.expression1 = expression1;
    this.expression2 = expression2;
  }

  interpret(context: string) {
    const result: boolean =
      this.expression1.interpret(context) &&
      this.expression2.interpret(context);
    return result;
  }
}

export class InterpreterPatternDemo {
  static getMaleExpression() {
    const robert: IExpression = new TerminalExpression("Robert");
    const john: IExpression = new TerminalExpression("John");
    return new OrExpression(robert, john);
  }

  static getFemaleExpression() {
    const julie: IExpression = new TerminalExpression("Julie");
    const married: IExpression = new TerminalExpression("Married");
    return new AndExpression(julie, married);
  }

  constructor(args: string[]) {
    const isMale:IExpression = InterpreterPatternDemo.getMaleExpression();
    const isMarriedWoman:IExpression = InterpreterPatternDemo.getFemaleExpression();

    console.log('Is Lucy male?', isMale.interpret('Lucy'))
    console.log('Julie is a married women?', isMarriedWoman.interpret('Married Julie'))
  }
}
