export{}
// Example 01 - As a function parameter (arrays)
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
const numArray = getArray<number>([1, 2, 3, 4, 5]);
const strArray = getArray<string>(["r", "n", "v"]);
console.log('Example 01: ', numArray);
console.log('Example 01: ', strArray);

// Example 02 - As a function parameter (arrays)
function returnRandomElement<T>(elementsArray: T[]): T {
  const randomElement = Math.floor(Math.random() * elementsArray.length)
  return elementsArray[randomElement]
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(returnRandomElement<number>(numbers)); // casting during the console.log

const randomNumber = returnRandomElement<number>(numbers) // casting in a variable // type annotation also works for the const
console.log('Example 02: ', randomNumber);

const countries = ['Brazil', 'USA', 'Japan', 'China', 'Canada']
console.log(returnRandomElement<string>(countries)); // casting during the console.log

const randomCountry = returnRandomElement<string>(countries) // casting in a variable // type annotation also works for the const
console.log('Example 02: ', randomCountry);


// Example 03 - As a function parameter (arrays)
const numbers2 = [1, 2, 3, 4, 5]
const countries2 = ['Brazil', 'Japan', 'China', 'Canada']
function showElements<T>(array: T[]): void {
  array.forEach(item => console.log(item))
}
showElements<number>(numbers2)
showElements<string>(countries2)




// Example 04 - As a function parameter (objects)
type UserGem = {
  name: string;
  email: string;
};

type AdminGen = {
  name: string;
  email: string;
  admin: true;
};

const userGen: UserGem = {
  name: "Rnv Developer",
  email: "rnv@rnvdeveloper",
};

const adminGen: AdminGen = {
  name: "Rnv Developer",
  email: "rnv@rnvdeveloper",
  admin: true,
};

function accessSystem<T>(anyRole: T): T {
  return anyRole;
}
console.log(accessSystem(userGen));
console.log(accessSystem(adminGen));
