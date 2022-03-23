export class State {
    private str: string;

    constructor(str: string) {
        this.str = str;
    }

    get Str() : string {
        return this.str;
    }

    set Str(str: string) {
        this.str = str;
    }
}