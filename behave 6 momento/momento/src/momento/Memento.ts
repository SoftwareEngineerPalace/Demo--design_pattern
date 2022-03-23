import { State } from "./State";

export class Memento {
    private state: State;

    constructor (state: State) {
        this.state = state;
    }

    get State(): State {
        console.log("get memento's state");
        return this.state;
    }
}