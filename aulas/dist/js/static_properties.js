"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example 01 - Static Properties
class Employee {
    constructor(firstName, lastName, title) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        Employee.hirings++;
    }
}
Employee.hirings = 0;
const employee1 = new Employee("RNV", "Developer", "Frontend Developer");
const employee2 = new Employee("Rato", "Marrato", "Backend Developer");
const employee3 = new Employee("Employee", "da Silva", "Tech Lead");
console.log(Employee.hirings);
// Example 02 - Static Methods
class Employee2 {
    constructor(firstName, lastName, title) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        Employee2.hirings++;
    }
    static returnHirings() {
        return Employee2.hirings;
    }
}
Employee2.hirings = 0;
const employee4 = new Employee2("RNV", "Developer", "Frontend Developer");
const employee5 = new Employee2("Rato", "Marrato", "Backend Developer");
console.log(Employee2.returnHirings());
//type Breed2 = ["Spitz", "Buldog", "Pug", "Yorkshire", "Poodle"];
class Dog {
    constructor(name, age, breeds) {
        this.name = name;
        this.age = age;
        this.breeds = breeds;
        Dog.SOLD_DOGS_QTTY++;
        console.log(Dog.SOLD_DOGS_QTTY);
    }
    showInfo() {
        console.log(`The dog ${this.name} is ${this.age} years old.`);
    }
}
Dog.SOLD_DOGS_QTTY = 0;
const dog1 = new Dog('Doguinho', 2, ['Yorkshire']);
const dog2 = new Dog('Dog', 4, ['Spitz']);
const dog3 = new Dog('Dogão', 2, ['Buldog']);
