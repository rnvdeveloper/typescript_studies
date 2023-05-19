"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enums are defined with PascalCase and words on singular
// Its use is not exacty recommended
// Numeric Enum
// On this example the 1 value was defined for the first position, so it is now the starting point for all siblings, otherwise it would be zero
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Left);
var Country;
(function (Country) {
    Country[Country["Brazil"] = 0] = "Brazil";
    Country[Country["Argentina"] = 1] = "Argentina";
    Country[Country["Japan"] = 2] = "Japan";
    Country[Country["Italy"] = 3] = "Italy";
})(Country || (Country = {}));
console.log(Country);
// String Enum
// when you define the value as an string, all siblings must receive a string
var Language;
(function (Language) {
    Language["Portuguese"] = "PT-BR";
    Language["English"] = "EN";
    Language["French"] = "FR";
    Language["Spanish"] = "ES";
})(Language || (Language = {}));
console.log(Language);
var Day;
(function (Day) {
    Day["Monday"] = "MON";
    Day["Tuesday"] = "TUE";
    Day["Wednesday"] = "WED";
    Day["Thursday"] = "THU";
    Day["Friday"] = "FRI";
    Day["Satuday"] = "SAT";
    Day["Sunday"] = "SUN";
})(Day || (Day = {}));
console.log(Day);
function foodFinder(c) {
    return "Yummy foods!";
}
console.log(foodFinder("Pasta" /* Food.Pasta */));
console.log(foodFinder("Hamburger" /* Food.Hamburger */));
console.log(foodFinder("Barbecue" /* Food.Barbecue */));
var Task;
(function (Task) {
    Task[Task["Todo"] = 0] = "Todo";
    Task[Task["InProgress"] = 1] = "InProgress";
    Task[Task["Done"] = 2] = "Done";
})(Task || (Task = {}));
const finishedTask = {
    id: 1,
    status: Task.Done,
    message: 'Congrats! Task succesfully completed!'
};
finishedTask.status === Task.Done && console.log(`Message: ${finishedTask.message}`);
