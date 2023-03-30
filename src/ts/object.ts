// Object represents values that are not primitive, best way to group data, can be anonymous or named.

// object type
const personObj = {
  firstname: "Rnv",
  lastname: "Developer",
  age: 41,
  function: "Developer",
};
console.log(personObj);

// Object as a function parameter (can be anonymous)
function onboardingObj1(empolyee: { name: string }) {
  return `Welcome ${empolyee.name}`;
}
console.log(onboardingObj1({ name: "Rnv" }));

interface IPersonObj1 {
  name: string;
  function: string;
}
// Object as a function parameter through interface (named object)
function onboardingObj2(employee: IPersonObj1) {
  return `Welcome ${employee.name}! Here you will be a ${employee.function}!`;
}
console.log(onboardingObj2({ name: "Rnv Developer", function: "Developer" }));

type IPersonObj2 = {
  name: string;
  function: string;
  language: string;
};

// Object as a type alias
function onboardingObj3(employee: IPersonObj2) {
  return `Welcome ${employee.name}! Here you will be a ${employee.function} and you will work with ${employee.language}!`;
}
console.log(
  onboardingObj3({
    name: "Rnv Developer",
    function: "Developer",
    language: "Javascript/Typescript",
  })
);

interface IPersonObj3 {
  name: string;
  function: string;
  language: string;
  email?: string;
}
// Object optional chainning
function onboardingObj4(employee: IPersonObj3) {
  return `Welcome ${employee.name}!
   Here you will be a ${employee.function} and you will work with ${employee.language}.`;
}
console.log(
  onboardingObj4({
    name: "Rnv Developer",
    function: "Developer",
    language: "Javascript/Typescript",
  })
);

interface IPersonObj4 {
  name: string;
  function: string;
  language: string;
  readonly email: string;
}
// Object readonly property (Prevend developer to modify a property of the object)
function onboardingObj5(employee: IPersonObj4) {
  return `Welcome ${employee.name}!
    Here you will be a ${employee.function} and you will work with ${employee.language}.
    Your company e-mail will be ${employee.email}.`;
}
console.log(
  onboardingObj5({
    name: "Rnv Developer",
    function: "Developer",
    language: "Javascript/Typescript",
    email: "rnv@rnvdeveloper",
  })
);

interface IMother {
  name: string;
}
interface IFather {
  lastname: string;
}
interface ISon extends IMother, IFather {
  age: number;
}
// Type of extensions (Inheritance)
const son: ISon = {
  name: "Rnv",
  lastname: "Developer",
  age: 20,
};
console.log(son);

interface IDog {
  type: string;
}
interface ICat {
  type: string;
}
type Animal = IDog & ICat;
// Type of intersections (Inheritance)
const animal = {
  type: "Bicho",
};
console.log(animal);

type UserObj = {
  name: string;
  email: string;
};

type AdminObj = {
  name: string;
  email: string;
  admin: true;
};
// generic objects
const userObj: UserObj = {
  name: "Rnv Developer",
  email: "rnv@rnvdeveloper",
};

const adminObj: AdminObj = {
  name: "Rnv Developer",
  email: "rnv@rnvdeveloper",
  admin: true,
};

function accessSystemObj<T>(anyRole: T): T {
  return anyRole;
}

console.log(accessSystemObj(userObj));
console.log(accessSystemObj(adminObj));
