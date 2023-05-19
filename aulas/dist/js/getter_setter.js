"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example 1
class Square {
    constructor() {
        this._height = 6;
        this._width = 6;
    }
    get calcSquare() {
        return this._height * this._width;
    }
}
const aSquare = new Square().calcSquare;
// console.log(aSquare);
// Example 2
class Person1 {
    constructor() {
        this.name = "";
    }
    set reWritePesrsonName1(setPersonName) {
        this.name = setPersonName;
    }
}
const person1 = new Person1();
person1.reWritePesrsonName1 = "GoodName";
// console.log("My name is:", person1.name);
// Example 3
class Student1 {
    constructor() {
        this._name = "GoodName";
        this._semester = 0;
        this._course = '';
    }
    get studentName() {
        return this._name;
    }
}
const student1 = new Student1();
const result = student1.studentName;
// console.log(result);
// Example 4
class Student2 {
    constructor(name, semester, course) {
        this.name = "GoodName";
        this.name = name;
        this.semester = semester;
        this.course = course;
    }
    get studentCourse() {
        return this.course;
    }
    set studentCourse(setCourse) {
        this.course = `Changed through set method ${setCourse}`;
    }
}
const student2 = new Student2('GoodName', 5, "Python");
student2.course = `Changed through property ${student2.name}`;
console.log(student2.course);
student2.studentCourse = 'Typescript';
console.log(`${student2.course}`);
