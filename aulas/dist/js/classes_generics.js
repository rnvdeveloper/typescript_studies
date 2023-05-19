"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example 01 - Generic Classes
class Box {
    constructor(item) {
        this.item = item;
    }
    getItem() {
        return this.item;
    }
    setItem(item) {
        this.item = item;
    }
}
const boxString = new Box("Rnv Developer");
const boxNumber = new Box(41);
console.log(boxString.getItem());
console.log(boxNumber.getItem());
// Example 02 - Generic Classes
class Student {
    // If I use the constructor ts will not alert for lack of initialization, however it will ignore the setValue and request on instaciation
    constructor(name, id) {
        this.id = id;
        this.name = name;
    }
    // If I use the setValue instead of the constructors ts alerts that props were no initialized
    setValues(name, id) {
        this.name = name;
        this.id = id;
    }
    showValues() {
        console.log(`
        Student's name is: ${this.name}
        Student ID is: ${this.id}
        `);
    }
}
const student1 = new Student('string', 0); // There is no interference here, it is only to satisfy the constructor
student1.setValues("Rnv Front Dev", 1);
console.log(student1.showValues());
const student2 = new Student('string', 'string'); // There is no interference here, it is only to satisfy the constructor
student2.setValues("Rnv Back Dev", '2');
console.log(student2.showValues());
