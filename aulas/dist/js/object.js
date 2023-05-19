"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Object represents values that are not primitive, best way to group data, can be anonymous or named.
// object type
const person = {
    firstname: "Rnv",
    lastname: "Developer",
    age: 41,
    function: "Developer",
};
console.log(person);
// Object as a function parameter (can be anonymous)
function onboarding1(empolyee) {
    return `Welcome ${empolyee.name}`;
}
console.log(onboarding1({ name: "Rnv" }));
// Object as a function parameter through interface (named object)
function onboarding2(employee) {
    return `Welcome ${employee.name}! Here you will be a ${employee.function}!`;
}
console.log(onboarding2({ name: "Rnv Developer", function: "Developer" }));
// Object as a type alias
function onboarding3(employee) {
    return `Welcome ${employee.name}! Here you will be a ${employee.function} and you will work with ${employee.language}!`;
}
console.log(onboarding3({
    name: "Rnv Developer",
    function: "Developer",
    language: "Javascript/Typescript",
}));
// Object optional chainning
function onboarding4(employee) {
    return `Welcome ${employee.name}!
   Here you will be a ${employee.function} and you will work with ${employee.language}.`;
}
console.log(onboarding4({
    name: "Rnv Developer",
    function: "Developer",
    language: "Javascript/Typescript",
}));
// Object readonly property (Prevend developer to modify a property of the object)
function onboarding5(employee) {
    return `Welcome ${employee.name}!
    Here you will be a ${employee.function} and you will work with ${employee.language}.
    Your company e-mail will be ${employee.email}.`;
}
console.log(onboarding5({
    name: "Rnv Developer",
    function: "Developer",
    language: "Javascript/Typescript",
    email: "rnv@rnvdeveloper",
}));
// Type of extensions (Inheritance)
const son = {
    name: "Rnv",
    lastname: "Developer",
    age: 20,
};
console.log(son);
// Type of intersections (Inheritance)
const animal = {
    type: "Bicho",
};
console.log(animal);
// generic objects
const userObj = {
    name: "Rnv Developer",
    email: "rnv@rnvdeveloper",
};
const adminObj = {
    name: "Rnv Developer",
    email: "rnv@rnvdeveloper",
    admin: true,
};
function accessSystem(anyRole) {
    return anyRole;
}
console.log(accessSystem(userObj));
console.log(accessSystem(adminObj));
