import { Mamifero } from "./mamifero";

export class Carnivoro extends Mamifero {

    constructor(name: string, size: string, age: number) {
        super(name, size);
    }

    setFood(): void {
        this.food = "meat"
    }
}
