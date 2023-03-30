"use strict";
function addNum(x, y) {
    return x + y;
}
function showMessage(message) {
    console.log(message);
}
console.log(addNum(1, 1));
showMessage("me the message");
function sumNumbers2(...numbers) {
    let total = 0;
    numbers.forEach((number) => (total += number));
    return total;
}
console.log(sumNumbers2(10, 20));
