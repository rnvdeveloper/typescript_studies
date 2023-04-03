export{}
// Accepts only de type values defined for each position

// Basic declaration of tuples
let person1: [number, string, boolean] = [10, "rnvdeveloper", true];
console.log(person1);

// Basic declaration of tuples with labels
let person2: [id: number, name: string, isAdmin: boolean] = [
  10,
  "rnvdeveloper",
  true,
];
console.log(person2);

// Defines an array of arrays with two types number and string
let employee: [number, string][];
employee = [
  [1, "rnvdeveloper"],
  [2, "dev"],
  [3, "front"],
];
console.log(employee);

// First item defines the type of every elment along the array spread.
let alphabet: [string, ...string[]] = ["a", "b", "c", "d", "e"];
console.log(alphabet);

// Heterogeneous array with spread.
let alphabetCheck: [number, boolean, ...string[]] = [1, true, ...alphabet];
console.log(alphabetCheck);

// Functions
function peopleList(names: string[], ages: number[]) {
  return [...names, ...ages];
}
console.log(peopleList(["rnvdeveloper", "mydog"], [41, 8]));

// This type creates an optional array tuple that could or not include the midleNme, in this situation, when writing the functions it calls/display the two methods that can be chosen just by writing the content as previously typed specified.
type Name =
  | [firstname: string, lastName: string]
  | [firstname: string, midleName: string, lastName: string];

function createPerson(...name: Name) {
  return [...name];
}
console.log(createPerson("rnv", "developer"));
console.log(createPerson("rnv", "developer", "front"));
