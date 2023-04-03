export{}
// This has a similar use to types, however is declared in a different way, call interface name with PascalCase and do not use the = sign.
// Does not accept primitive values or unions

interface IUserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: IUserInterface = {
  id: 1,
  name: "rnv",
  age: 41,
};
console.log(user1);

interface IMathFunc {
  (x: number, y: number): number;
}

const addValue: IMathFunc = (x: number, y: number): number => x + y;
const subValue: IMathFunc = (x: number, y: number): number => x - y;

console.log(addValue(2, 2));
console.log(subValue(2, 2));

interface IMathFunctionParams {
  n1: number;
  n2: number;
}

function sumNumbers(nums: IMathFunctionParams) {
  return nums.n1 + nums.n2;
}

console.log(sumNumbers({ n1: 1, n2: 2 }));
