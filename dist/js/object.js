"use strict";
// Object represents values that are not primitive, best way to group data, can be anonymous or named.
// object type
const personObj = {
    firstname: "Rnv",
    lastname: "Developer",
    age: 41,
    function: "Developer",
};
console.log(personObj);
// Object as a function parameter (can be anonymous)
function onboardingObj1(empolyee) {
    return `Welcome ${empolyee.name}`;
}
console.log(onboardingObj1({ name: "Rnv" }));
// Object as a function parameter through interface (named object)
function onboardingObj2(employee) {
    return `Welcome ${employee.name}! Here you will be a ${employee.function}!`;
}
console.log(onboardingObj2({ name: "Rnv Developer", function: "Developer" }));
// Object as a type alias
function onboardingObj3(employee) {
    return `Welcome ${employee.name}! Here you will be a ${employee.function} and you will work with ${employee.language}!`;
}
console.log(onboardingObj3({
    name: "Rnv Developer",
    function: "Developer",
    language: "Javascript/Typescript",
}));
// Object optional chainning
function onboardingObj4(employee) {
    return `Welcome ${employee.name}!
   Here you will be a ${employee.function} and you will work with ${employee.language}.`;
}
console.log(onboardingObj4({
    name: "Rnv Developer",
    function: "Developer",
    language: "Javascript/Typescript",
}));
// Object readonly property (Prevend developer to modify a property of the object)
function onboardingObj5(employee) {
    return `Welcome ${employee.name}!
    Here you will be a ${employee.function} and you will work with ${employee.language}.
    Your company e-mail will be ${employee.email}.`;
}
console.log(onboardingObj5({
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
function accessSystemObj(anyRole) {
    return anyRole;
}
console.log(accessSystemObj(userObj));
console.log(accessSystemObj(adminObj));
