"use strict";
// Void variables accepts undefined and null, however, to accept the null values you need to add the strictNullChecks as false on tsconfig.
function firstVoidFn() {
    console.log("Hello Frontender!");
}
firstVoidFn();
// Although it is not annoted, this is a void function according to its lack of data return
const secondVoidFn = () => console.log("Hello Backender!");
secondVoidFn();
// These are not void functions as they return a number.
function firstSum() {
    let a = 1;
    let b = 4;
    return a + b;
}
console.log(firstSum());
const secondSum = () => {
    let a = 2;
    let b = 4;
    return a + b;
};
console.log(secondSum());
// to accept the null values you need to add the strictNullChecks as false
let varVoid;
varVoid = undefined;
// varVoid = null
