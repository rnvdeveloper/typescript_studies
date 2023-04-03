"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    id: 1,
    name: "rnv",
    age: 41,
};
console.log(user1);
const addValue = (x, y) => x + y;
const subValue = (x, y) => x - y;
console.log(addValue(2, 2));
console.log(subValue(2, 2));
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
