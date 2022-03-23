import { Memento } from "./Memento";

export class CareTaker {
    private memento!: Memento;

    get Memento(): Memento {
        return this.memento;
    }

    set Memento(memento: Memento) {
        this.memento = memento;
    }
}