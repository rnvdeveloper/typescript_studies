"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example 01: No modifiers attribution means that it is public
// class Student1 {
//     code: number;
//     name: string;
// }
// const student1 = new Student1();
// student1.code = 1;
// student1.name = "Gaga";
// console.log(student1);
// Example 02: private modifier does not display the private property
class Student2 {
    constructor(code, name, age) {
        this.code = code;
        this.name = name;
        this.age = age;
    }
    returnSudent2Data() {
        return `
        Student code: ${this.code}
        Student Name: ${this.name}
        Student age: ${this.age}`;
    }
}
const student2 = new Student2(1, "Gaga", 25);
// console.log(student2.returnSudent2Data());
// Example 03: protected modifier
class Student3 {
    constructor(code, name, age) {
        this.code = code;
        this.name = name;
        this.age = age;
    }
}
const student3 = new Student2(1, "Gaga", 25);
// console.log(student3.returnSudent2Data());
class Person3 extends Student3 {
    constructor(code, name, age, course) {
        super(code, name, age);
        this.course = course;
    }
    returnSudent3Data() {
        return `
        Student code: ${this.code}
        Student name: ${this.name}
        Student age: ${this.age}
        Student course: ${this.course}`;
    }
}
const person3 = new Person3(10, "Gaga", 25, "Music");
// console.log(person3.returnSudent3Data());
// Example 04: readonly modifier
class Employee1 {
    constructor(birthDate) {
        this.birthDate = birthDate;
    }
}
const employee1 = new Employee1(new Date(1981, 10, 16));
console.log(employee1);
const iEmploee = {
    name: "Jão",
    idCode: 5522,
};
console.log(iEmploee);
