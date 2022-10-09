export class Mamifero {
    protected name: string;
    protected size: string;
    protected food: string
    private age: number;

    constructor(name: string, size: string, age: number) {
        this.name = name;
        this.size = size;
        this.food = "none";
        this.age = age;
    }

    setFood(): void {
        this.food = "milk"
    }
}