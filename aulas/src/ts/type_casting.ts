export {};

const value: unknown = "Hello world!";
console.log((value as string).length);

const name: unknown = "Rnv Developer";
console.log((name as string).toLocaleLowerCase());

const car = "Hammer";
const stringSize: number = (<string>car).length;
console.log(`The strig size is: ${stringSize}`);