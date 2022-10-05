import { Mamifero } from "./classes/mamifero";
import { Carnivoro } from "./classes/carnivoro";
import { Herbivoro } from "./classes/herbivoro";
import { Omnivoro } from "./classes/omnivoro";

//-->new mamífero
let mamifero01 = new Mamifero ("Perro", "small")
console.log(mamifero01);

//---> Con .setFood() cambio la "food" de "none" a "milk"
mamifero01.setFood();
console.log(mamifero01);

//-->new carnivoro
let carnivoro01 = new Carnivoro ("Lobo", "medium", 2)
console.log(carnivoro01);


//---> Con .setFood() cambio la "food" de "none" a "meat"
carnivoro01.setFood();
console.log(carnivoro01);

//---> el método .setFood() cambia "none" a meat/plants/meat&plants según la clase