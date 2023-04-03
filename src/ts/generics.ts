export{}
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
let numArray = getArray<number>([1, 2, 3, 4, 5]);
let strArray = getArray<string>(["r", "n", "v"]);

type UserGem = {
  name: string;
  email: string;
};

type AdminGen = {
  name: string;
  email: string;
  admin: true;
};
// generic objects
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
