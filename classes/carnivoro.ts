import { Mamifero } from "./mamifero";

export class Carnivoro extends Mamifero {
    private age : number;

    constructor (name:string, size:string, age:number){
        super(name, size);
        this.age = age
    }

    setFood():void{
        this.food = "meat"
    }
}
