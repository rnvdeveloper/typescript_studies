"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example 01 - Basic Class
class Animal {
    move(distance = 0) {
        return `The animal moved ${distance} meters`;
    }
}
class Dog extends Animal {
    bark() {
        return `The dog barked ${"au au"}!`;
    }
}
const dog = new Dog();
console.log(dog.bark());
console.log(dog.move());
// Example 02 - Extending a Class
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    returnPersonFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    returnPersonPresentation() {
        return `Hi! My name is ${this.firstName} ${this.lastName}!`;
    }
}
class Employee extends Person {
    constructor(firstName, lastName, employeeFunction) {
        super(firstName, lastName);
        this.employeeFunction = employeeFunction;
    }
    returnEmployeePresentation() {
        return `${(super.returnPersonPresentation())} And I am a ${this.employeeFunction}`;
    }
}
const employee = new Employee('Good', 'NameForME', 'Developer');
console.log(employee);
console.log(employee.returnPersonFullName());
console.log(employee.returnPersonPresentation());
console.log(employee.returnEmployeePresentation());
// Case 1: Este é a maneira comum que vejo declarar as classes e não gera duplicidade na compilação.
class Person1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
// Case 2: Desta maneira, sem a declarar a prop antes do contrutor, gera o erro de tipo não existente, mas basta colocar o private como no exemplo usado na aula que o erro não existe mais.
class Person2 {
    constructor(firstName, lastName) {
        // this.firstName = firstName;
        // this.lastName = lastName;
    }
}
// Case 3: Este é a maneira utilizada na aula e ela duplica a prop na compilação.
class Person3 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
// Case 4: Quando é retirado o this da maneira utilizada na aula não há duplicação na compilação.
class Person4 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
