"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNum(x, y) {
    return x + y;
}
function showMessage(message) {
    console.log(message);
}
console.log(addNum(1, 1));
showMessage("me the message");
function sumNumbers(...numbers) {
    let total = 0;
    numbers.forEach((number) => (total += number));
    return total;
}
console.log(sumNumbers(10, 20));
