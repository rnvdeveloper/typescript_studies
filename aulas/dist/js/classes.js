"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example 01 (with constructor)
class Person1 {
    constructor(firstName1, lastName1, age) {
        this.firstName1 = firstName1;
        this.lastName1 = lastName1;
    }
    fullName() {
        return `${this.firstName1} ${this.lastName1}`;
    }
}
const person1 = new Person1("Rato", "Marrato");
console.log(person1.fullName());
class Persona extends Person1 {
    constructor(firstName, lastName, age) {
        super(firstName, lastName);
        this.age = age;
    }
}
const personita = new Persona('Rato', 'Marrato', 41);
console.log(personita.fullName());
console.log(personita.age);
// Example 02 (without constructor)
// class PersonClass2 {
//   firstName: string;
//   lastName: string;
// }
// const personClass2 = new PersonClass2();
// personClass2.firstName = "Rato";
// personClass2.lastName = "Marrato";
// console.log(personClass2.firstName);
// console.log(personClass2.lastName);
