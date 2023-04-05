export {};
// This has a similar use to types, however is declared in a different way, call interface name with PascalCase and do not use the = sign.
// Does not accept primitive values or unions

interface IUserInterface {
    readonly id: number;
    name: string;
    age?: number;
}

const user1: IUserInterface = {
    id: 1,
    name: "rnv",
    age: 41,
};
console.log(user1);

interface IMathFunc {
    (x: number, y: number): number;
}
const addValue: IMathFunc = (x: number, y: number): number => x + y;
const subValue: IMathFunc = (x: number, y: number): number => x - y;
console.log(addValue(2, 2));
console.log(subValue(2, 2));

interface IMathFunctionParams {
    n1: number;
    n2: number;
}

function sumNumbers(nums: IMathFunctionParams) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));

// Second phase of training
// Example 01: Interface simple
interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
}

const showName = (person: IPerson) => {
    return `
  Name: ${person.firstName}
  Lastname: ${person.lastName}
  Age: ${person.age}`;
};

const rnv: IPerson = {
    firstName: "Rnv",
    lastName: "Developer",
    age: 41,
};
console.log(showName(rnv));

// Example 02: Interface with optional properties
interface IBook {
    title: string;
    author: string;
    pages?: number;
}

const showBookData = (book: IBook) => {
    return `
  Title: ${book1.title}
  Author: ${book1.author}`;
};

const book1: IBook = {
    title: "Clean Code",
    author: "Robert C. Martin",
};
console.log(showBookData(book1));

// Example 03: Interface with optional properties and readonly
interface ICar {
    readonly model: string;
    color: string;
    year: number;
}

const car: ICar = {
    model: "Palião",
    color: "Red",
    year: 2002,
};
console.log(car);

// Example 04: Interface with implement class
interface IAnimal {
    name: string;
    age: number;
    isAlive: boolean;
    eat(foodType: string): string;
}

class Cat implements IAnimal {
    name: string;
    age: number;
    isAlive: boolean;

    constructor(name: string, age: number, isAlive: boolean) {
        this.name = name;
        this.age = age;
        this.isAlive = isAlive;
    }

    eat(foodType: string) {
        return `The cat ${this.name} only eats ${foodType}.`;
    }
}
const cat = new Cat("Rato", 41, true);
console.log(cat);
console.log(cat.eat("pizza"));

// Example 05: Interface vs Alias Type
interface IPerson2 {
    firstName: string;
    lastName: string;
    age: number;
}

type Person3 = {
    firstName: string;
    lastName: string;
    age: number;
};

// Example 06: Interface extension

interface IAnimal2 {
    name: string;
    age: number;
    animalSize: string;
}

interface IDog extends IAnimal2 {
    // there is no need to rewrite all properties, just add the specific ones
    breed: string;
}

const dog: IDog = {
    name: "Dog",
    age: 6,
    animalSize: "small",
    breed: "Chiuaua",
};
console.log(dog);

// Example 07: Multiple Interface extension

interface IDog2 {
    name: string;
    size: string;
}

interface ICat {
    name: string;
    paws: number;
}

interface IAnimalExtends extends IDog2, ICat {
    name: string;
    paws: number;
}

const animalDog: IAnimalExtends = {
    name: "Doguíneo",
    size: "small",
    paws: 4,
};

console.log(animalDog);

// Example 08: Replacing property of Multiple Interface extension = Omit
interface IEmployee {
    id: number; // The uion type can be defined here instead of using Omit at the extended interface for the example below
    name: string;
    wage: number; // The uion type can be defined here instead of using Omit at the extended interface for the example below
}

interface IDeveloper extends Omit<IEmployee, "id" | 'wage'> { // Using Omit with union allowing changes to one or more property type, but changes are not mandatory.
    id: string;
    wage: string;
    programmingLanguage: string;
}

const developer: IDeveloper = {
    id: "ts programmer",
    name: "Rnv",
    wage: '20k',
    programmingLanguage: "typescript"
};
console.log(developer);
