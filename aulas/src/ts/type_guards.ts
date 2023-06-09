export {};

// Example 01 - typeof
function employeeDetails(employee: string | number) {
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

// Example 02 - typeof
type AlphaNumeric = string | number;

const showType = (arg1: AlphaNumeric, arg2: AlphaNumeric) => {
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
    name: string;
    manufacturer: string;
    constructor(name: string, manufacturer: string) {
        this.name = name;
        this.manufacturer = manufacturer;
    }
}

class Bike {
    name: string;
    year: number;
    constructor(name: string, year: number) {
        this.name = name;
        this.year = year;
    }
}

const showVehicleDetails = (vehicle: Car | Bike) => {
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

// Example 04 - in
interface Animal {
    group: string;
}

class Fish implements Animal {
    group: string;
    fishColor: string;

    constructor(group: string, fishColor: string) {
        this.group = group;
        this.fishColor = fishColor;
    }
}

class Bird implements Animal {
    group: string;
    featherColor: string;

    constructor(group: string, featherColor: string) {
        this.group = group;
        this.featherColor = featherColor;
    }
}

const swuin = (group: string) => {
    console.log(`The group ${group} is swimming.`);
}

const fly = (group: string) => {
    console.log(`The group ${group} is flying.`);
}

const move = (animal: Animal): void => {
    if ('fishColor' in animal) {
        swuin((animal as Fish).group)
    }
    if ('featherColor' in animal) {
        fly((animal as Bird).group)
    }
}

console.log(move(new Fish('fish', 'red')));
console.log(move(new Bird('bird', 'blue')));
