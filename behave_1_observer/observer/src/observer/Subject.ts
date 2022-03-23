import { IObserver } from "./IObserver";

export class Subject {
  private readers!: IObserver[];

  attach(reader: IObserver) {
    if (!this.readers) {
      this.readers = [];
    }
    this.readers.push(reader);
  }

  detach(reader: IObserver) {
    const index = this.readers.indexOf(reader);
    this.readers.splice(index, 1);
  }

  notifyObservers() {
    for (let reader of this.readers) {
      reader.update(this);
    }
  }
}
