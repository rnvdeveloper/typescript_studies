"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example 01 - typeof
function employeeDetails(employee) {
    if (typeof employee === "string") {
        return `Employee's name is: ${employee}`;
    }
    if (typeof employee === "number") {
        return `Employee's id is: ${employee}`;
    }
}
const emp1 = employeeDetails("Rnv Developer");
const emp2 = employeeDetails(24572);
console.log(emp1);
console.log(emp2);
const showType = (arg1, arg2) => {
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        return arg1 + arg2;
    }
    if (typeof arg1 === "string" && typeof arg2 === "string") {
        return arg1.concat(arg2);
    }
    throw new Error("Arguments must have the same type, string or number.");
};
console.log(showType("Rrn", "41"));
console.log(showType(10, 10));
//console.log(showType("Rnv", 41));
// Example 03 - instanceof
class Car {
    constructor(name, manufacturer) {
        this.name = name;
        this.manufacturer = manufacturer;
    }
}
class Bike {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
const showVehicleDetails = (vehicle) => {
    if (vehicle instanceof Car) {
        return `The name of the car is: ${vehicle.name} and the manufacturer is ${vehicle.manufacturer}.`;
    }
    if (vehicle instanceof Bike) {
        return `The name of the bike is: ${vehicle.name} and the manufacturer is ${vehicle.year}.`;
    }
};
const car = new Car("Palião", "Fiat");
console.log(showVehicleDetails(car));
const bike = new Bike("Spider", 2022);
console.log(showVehicleDetails(bike));
class Fish {
    constructor(group, fishColor) {
        this.group = group;
        this.fishColor = fishColor;
    }
}
class Bird {
    constructor(group, featherColor) {
        this.group = group;
        this.featherColor = featherColor;
    }
}
const swuin = (group) => {
    console.log(`The group ${group} is swimming.`);
};
const fly = (group) => {
    console.log(`The group ${group} is flying.`);
};
const move = (animal) => {
    if ('fishColor' in animal) {
        swuin(animal.group);
    }
    if ('featherColor' in animal) {
        fly(animal.group);
    }
};
console.log(move(new Fish('fish', 'red')));
console.log(move(new Bird('bird', 'blue')));
