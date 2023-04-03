"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(["r", "n", "v"]);
// generic objects
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
