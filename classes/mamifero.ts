export class Mamifero {
    protected name: string;
    protected size: string;
    protected food: string

    constructor (name: string, size: string){
        this.name = name;
        this.size = size;
        this.food = "none";
    }

    setFood():void{
        this.food = "milk"
    }
}