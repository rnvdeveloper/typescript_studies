export {};

// Example 01 - For constraints the type must be extended from the type/interface
interface IPerson {
    name: string;
    age: number;
}

const peopleArray: IPerson[] = [
    { name: "Rnv Developer", age: 41 },
    { name: "A Male Person", age: 5 },
    { name: "A Female Person", age: 7 },
    { name: "A Non Binary Person", age: 27 },
];

const getGreaterThan = <T extends IPerson>(
    peopleArray: T[],
    age: number
): T[] => {
    return peopleArray.filter((person) => person.age > age);
};
const personAgedGreaterThan25 = getGreaterThan(peopleArray, 25);
console.log(personAgedGreaterThan25);

// Example 02 - Join objects properties
const joinObjects = <U extends object, V extends object>(
    object1: U,
    object2: V
) => {
    return {
        ...object1,
        ...object2,
    };
};
const person = joinObjects({ name: "Rnv Developer Loper" }, { age: 42 });
console.log(person);

// Example 03 - Type parameter in generic constraints
const prop = <O, K extends keyof O>(objectEx: O, objectExKey: K) => {
    return objectEx[objectExKey];
};

const person2 = prop({ name: "Rnv Dev" }, "name");

console.log(person2);
