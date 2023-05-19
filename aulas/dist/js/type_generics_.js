"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example 01 - As a function parameter (arrays)
function getArray(items) {
    return new Array().concat(items);
}
const numArray = getArray([1, 2, 3, 4, 5]);
const strArray = getArray(["r", "n", "v"]);
console.log('Example 01: ', numArray);
console.log('Example 01: ', strArray);
// Example 02 - As a function parameter (arrays)
function returnRandomElement(elementsArray) {
    const randomElement = Math.floor(Math.random() * elementsArray.length);
    return elementsArray[randomElement];
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(returnRandomElement(numbers)); // casting during the console.log
const randomNumber = returnRandomElement(numbers); // casting in a variable // type annotation also works for the const
console.log('Example 02: ', randomNumber);
const countries = ['Brazil', 'USA', 'Japan', 'China', 'Canada'];
console.log(returnRandomElement(countries)); // casting during the console.log
const randomCountry = returnRandomElement(countries); // casting in a variable // type annotation also works for the const
console.log('Example 02: ', randomCountry);
// Example 03 - As a function parameter (arrays)
const numbers2 = [1, 2, 3, 4, 5];
const countries2 = ['Brazil', 'Japan', 'China', 'Canada'];
function showElements(array) {
    array.forEach(item => console.log(item));
}
showElements(numbers2);
showElements(countries2);
const userGen = {
    name: "Rnv Developer",
    email: "rnv@rnvdeveloper",
};
const adminGen = {
    name: "Rnv Developer",
    email: "rnv@rnvdeveloper",
    admin: true,
};
function accessSystem(anyRole) {
    return anyRole;
}
console.log(accessSystem(userGen));
console.log(accessSystem(adminGen));
