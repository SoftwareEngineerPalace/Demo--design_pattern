abstract class NodeComponent {
  /** 抽象类里的抽象方法不可以有实现部分 */
  abstract printStruct(preStr: string): void;
  addChild(child: NodeComponent) {}
  removeChild(child: NodeComponent) {}
  getChild(index: number) {}
}

class Leaf extends NodeComponent {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
  printStruct(preStr: string) {
    console.log(preStr + "- " + this.name);
  }
}

class Composite extends NodeComponent {
  private childComponents: NodeComponent[];

  private name: string = "";

  constructor(name: string) {
    super();
    this.name = name;
    this.childComponents = [];
  }

  addChild(child: NodeComponent) {
    if (this.childComponents === null) {
      this.childComponents = [];
    }
    this.childComponents.push(child);
  }

  printStruct(preStr: string) {
    console.log(preStr + "+ " + this.name);
    if (this.childComponents !== null) {
      preStr += " ";
    }
    for (let compo of this.childComponents) {
      compo.printStruct(preStr);
    }
  }
}

export { Composite, NodeComponent, Leaf };
