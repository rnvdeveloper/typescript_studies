"use strict";
let object = {
    id: 1,
    name: "rato",
};
function myFunction(object) {
    typeof object === "object" &&
        Object.entries(object).forEach((entry) => console.log(entry));
}
myFunction(object);
function A() {
    console.log("called A");
    return false;
}
function B() {
    console.log("called B");
    return true;
}
console.log(A() && B());
