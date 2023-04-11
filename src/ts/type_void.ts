export{}
// Void variables accepts undefined and null, however, to accept the null values you need to add the strictNullChecks as false on tsconfig.

function voidFn1(): void {
  console.log("Hello Frontender!");
}
voidFn1();

// Although it is not annoted, this is a void function according to its lack of data return
const voidFn2 = () => console.log("Hello Backender!");
voidFn2();

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
let varVoid:  void;
varVoid = undefined
// varVoid = null