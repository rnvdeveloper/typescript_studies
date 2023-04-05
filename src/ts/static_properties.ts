export {};
// Example 01 - Static Properties
class Employees {
    static hirings = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private title: string
    ) {
        Employees.hirings++;
    }
}

const employee1 = new Employees("RNV", "Developer", "Frontend Developer");
const employee2 = new Employees("Rato", "Marrato", "Backend Developer");
const employee3 = new Employees("Employee", "da Silva", "Tech Lead");

console.log(Employees.hirings);

// Example 02 - Static Methods
class Employees2 {
    private static hirings = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private title: string
    ) {
        Employees2.hirings++;
    }

    public static returnHirings() {
        return Employees2.hirings;
    }
}
const employee4 = new Employees2("RNV", "Developer", "Frontend Developer");
const employee5 = new Employees2("Rato", "Marrato", "Backend Developer");
console.log(Employees2.returnHirings());

// Example 03 - Static Properties
type Breed = "Spitz" | "Buldog" | "Pug" | "Yorkshire" | "Poodle";
//type Breed2 = ["Spitz", "Buldog", "Pug", "Yorkshire", "Poodle"];

class Dog {
    public name: string;
    public age: number;
    public breeds: Breed[];
    public static SOLD_DOGS_QTTY = 0;

    constructor(name: string, age: number, breeds: Breed[]) {
        this.name = name;
        this.age = age;
        this.breeds = breeds;

        Dog.SOLD_DOGS_QTTY++
        console.log(Dog.SOLD_DOGS_QTTY);
    }

    public showInfo(): void {
        console.log(`The dog ${this.name} is ${this.age} years old.`);
    }
}

const dog1 = new Dog('Doguinho', 2, ['Yorkshire'])
const dog2 = new Dog('Dog', 4, ['Spitz'])
const dog3 = new Dog('Dogão', 2, ['Buldog'])
