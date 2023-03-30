"use strict";
// // Enums are defined with PascalCase and words on singular
// // Its use is not exacty recommended
// // Numeric Enum
// // On this example the 1 value was defined for the first position, so it is now the starting point for all siblings, otherwise it would be zero
// enum Direction {
//   Up = 1,
//   Down,
//   Left,
//   Right,
// }
// console.log(Direction.Left);
// enum Country {
//   Brazil,
//   Argentina,
//   Japan,
//   Italy
// }
// console.log(Country);
// // String Enum
// // when you define the value as an string, all siblings must receive a string
// enum Language {
//   Portuguese = "PT-BR",
//   English = "EN",
//   French = "FR",
//   Spanish = "ES",
// }
// console.log(Language);
// enum Day {
//   Monday = 'MON',
//   Tuesday = 'TUE',
//   Wednesday = 'WED',
//   Thursday = 'THU',
//   Friday = 'FRI',
//   Satuday = 'SAT',
//   Sunday = 'SUN',
// }
// console.log(Day);
// const enum Food {
//   Hamburger = 'Hamburger',
//   Pasta = 'Pasta',
//   Pizza = 'Pizza',
//   Pie = 'Pie',
//   Barbecue = 'Barbecue'
// }
// function foodFinder(c: Food) {
//   return "Yummy foods!"
// }
// console.log(foodFinder(Food.Pasta))
// console.log(foodFinder(Food.Hamburger))
// console.log(foodFinder(Food.Barbecue))
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
