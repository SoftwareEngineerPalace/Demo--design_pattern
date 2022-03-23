import { IObserver } from "./IObserver";
import { Newspaper } from "./Newspaper";
import { Subject } from "./Subject";

export class Observer implements IObserver {
  private name!: string;
  setName(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  update(subject: Subject) {
    console.log(
      this.name,
      "收到了报纸新内容: " + (subject as Newspaper).getContent()
    );
  }
}
