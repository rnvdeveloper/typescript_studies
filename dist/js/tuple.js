"use strict";
// Accepts only de type values defined for each position
// Basic declaration of tuples
let person1 = [10, "rnvdeveloper", true];
console.log(person1);
// Basic declaration of tuples with labels
let person2 = [
    10,
    "rnvdeveloper",
    true,
];
console.log(person2);
// Defines an array of arrays with two types number and string
let employee;
employee = [
    [1, "rnvdeveloper"],
    [2, "dev"],
    [3, "front"],
];
console.log(employee);
// First item defines the type of every elment along the array spread.
let alphabet = ["a", "b", "c", "d", "e"];
console.log(alphabet);
// Heterogeneous array with spread.
let alphabetCheck = [1, true, ...alphabet];
console.log(alphabetCheck);
// Functions
function peopleList(names, ages) {
    return [...names, ...ages];
}
console.log(peopleList(["rnvdeveloper", "mydog"], [41, 8]));
function createPerson(...name) {
    return [...name];
}
console.log(createPerson("rnv", "developer"));
console.log(createPerson("rnv", "developer", "front"));
