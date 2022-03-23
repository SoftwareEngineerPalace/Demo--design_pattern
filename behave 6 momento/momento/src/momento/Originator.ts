import { Memento } from "./Memento";
import { State } from "./State";

export class Originator {
    private state: State;

    constructor(state: State) {
        this.state = state;
    }

    get State(): State {
        return this.state;
    }

    set State(state: State) {
        console.log("Originator Set State :: ", state);
        this.state = state;
    }

    public createMemento(): Memento {
        console.log("creates a memento with a given state");
        return new Memento(this.state);
    }

    public setMemento(memento: Memento) {
        console.log("sets the state back");
        this.State = memento.State;
    }
}