"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const peopleArray = [
    { name: "Rnv Developer", age: 41 },
    { name: "A Male Person", age: 5 },
    { name: "A Female Person", age: 7 },
    { name: "A Non Binary Person", age: 27 },
];
const getGreaterThan = (peopleArray, age) => {
    return peopleArray.filter((person) => person.age > age);
};
const personAgedGreaterThan25 = getGreaterThan(peopleArray, 25);
console.log(personAgedGreaterThan25);
// Example 02 - Join objects properties
const joinObjects = (object1, object2) => {
    return Object.assign(Object.assign({}, object1), object2);
};
const person = joinObjects({ name: "Rnv Developer Loper" }, { age: 42 });
console.log(person);
// Example 03 - Type parameter in generic constraints
const prop = (objectEx, objectExKey) => {
    return objectEx[objectExKey];
};
const person2 = prop({ name: "Rnv Dev" }, "name");
console.log(person2);
