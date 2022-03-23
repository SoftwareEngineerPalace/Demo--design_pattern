import { Subject } from "./Subject";

export class Newspaper extends Subject {
  private content!: string;

  setContent(content: string) {
    this.content = content;

    this.notifyObservers();
  }

  getContent() {
    return this.content;
  }
}
