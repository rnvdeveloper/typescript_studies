export {};

// Example 1
class Square {
    private _height = 6;
    private _width = 6;

    get calcSquare() {
        return this._height * this._width;
    }
}
const aSquare = new Square().calcSquare;
// console.log(aSquare);

// Example 2
class Person1 {
    name: string = "";

    set reWritePesrsonName1(setPersonName: string) {
        this.name = setPersonName;
    }
}
const person1 = new Person1();
person1.reWritePesrsonName1 = "GoodName";
// console.log("My name is:", person1.name);

// Example 3
class Student1 {
    private _name = "GoodName";
    private _semester: number = 0;
    private _course: string = ''

    public get studentName() {
        return this._name;
    }
}
const student1 = new Student1();
const result = student1.studentName;
// console.log(result);

// Example 4
class Student2 {
    name = "GoodName";
    semester: number;
    course: string;

    constructor(name: string, semester: number, course: string) {
        this.name = name;
        this.semester = semester;
        this.course = course;
    }

    public get studentCourse() {
        return this.course;
    }

    public set studentCourse(setCourse: string) {
        this.course = `Changed through set method ${setCourse}`
    }
}

const student2 = new Student2('GoodName', 5, "Python")
student2.course = `Changed through property ${student2.name}`
console.log(student2.course);

student2.studentCourse = 'Typescript'
console.log(`${student2.course}`);
