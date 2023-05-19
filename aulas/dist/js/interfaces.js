"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    id: 1,
    name: "rnv",
    age: 41,
};
console.log(user1);
const addValue = (x, y) => x + y;
const subValue = (x, y) => x - y;
console.log(addValue(2, 2));
console.log(subValue(2, 2));
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
const showName = (person) => {
    return `
  Name: ${person.firstName}
  Lastname: ${person.lastName}
  Age: ${person.age}`;
};
const rnv = {
    firstName: "Rnv",
    lastName: "Developer",
    age: 41,
};
console.log(showName(rnv));
const showBookData = (book) => {
    return `
  Title: ${book1.title}
  Author: ${book1.author}`;
};
const book1 = {
    title: "Clean Code",
    author: "Robert C. Martin",
};
console.log(showBookData(book1));
const car = {
    model: "Palião",
    color: "Red",
    year: 2002,
};
console.log(car);
class Cat {
    constructor(name, age, isAlive) {
        this.name = name;
        this.age = age;
        this.isAlive = isAlive;
    }
    eat(foodType) {
        return `The cat ${this.name} only eats ${foodType}.`;
    }
}
const cat = new Cat("Rato", 41, true);
console.log(cat);
console.log(cat.eat("pizza"));
const dog = {
    name: "Dog",
    age: 6,
    animalSize: "small",
    breed: "Chiuaua",
};
console.log(dog);
const animalDog = {
    name: "Doguíneo",
    size: "small",
    paws: 4,
};
console.log(animalDog);
const developer = {
    id: "ts programmer",
    name: "Rnv",
    wage: "20k",
    programmingLanguage: "typescript",
};
console.log(developer);
const book2 = {
    author: "A Author",
    title: "A title",
    price: 20.0,
};
const book3 = {
    author: "A Author",
    title: "A title",
    pages: 200,
    price: 20.0,
};
console.log(book2);
console.log(book3);
