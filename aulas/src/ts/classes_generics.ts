export {};

// Example 01 - Generic Classes
class Box<T> {
    private item: T;

    constructor(item: T) {
        this.item = item;
    }

    getItem() {
        return this.item;
    }

    setItem(item: T) {
        this.item = item;
    }
}
const boxString = new Box<string>("Rnv Developer");
const boxNumber = new Box<number>(41);

console.log(boxString.getItem());
console.log(boxNumber.getItem());

// Example 02 - Generic Classes

class Student<T, U> {
    private name: T;
    private id: U;

    // If I use the constructor ts will not alert for lack of initialization, however it will ignore the setValue and request on instaciation
    constructor(name: T, id: U) {
        this.id = id;
        this.name = name;
    }

    // If I use the setValue instead of the constructors ts alerts that props were no initialized
    setValues(name: T, id: U): void {
        this.name = name;
        this.id = id;
    }

    showValues(): void {
        console.log(`
        Student's name is: ${this.name}
        Student ID is: ${this.id}
        `);
    }
}

const student1 = new Student<string, number>('string', 0); // There is no interference here, it is only to satisfy the constructor
student1.setValues("Rnv Front Dev", 1);
console.log(student1.showValues());

const student2 = new Student<string, string>('string', 'string'); // There is no interference here, it is only to satisfy the constructor
student2.setValues("Rnv Back Dev", '2');
console.log(student2.showValues());




