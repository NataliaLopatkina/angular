export class User {
    public name;
    constructor(name: string, public age: number, public lastName?: string) {
        this.name = name;
    }
}