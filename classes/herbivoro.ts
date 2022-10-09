import { Mamifero } from "./mamifero";

export class Herbivoro extends Mamifero {

    constructor (name:string, size:string, age:number){
        super(name, size);
    }

    setFood():void{
        this.food = "plants"
    }
}
