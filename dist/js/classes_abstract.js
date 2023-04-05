"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get returnEmployeeFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    issuePaycheck() {
        return `Employee name: ${this.returnEmployeeFullName} - Wage: ${this.returnWage()}`;
    }
}
class EmployeeCLT extends Employee {
    constructor(firstName, lastName, wage) {
        super(firstName, lastName);
        this.wage = wage;
    }
    returnWage() {
        return this.wage;
    }
}
class EmployeePJ extends Employee {
    constructor(firstName, lastName, hourlyValue, workedHours) {
        super(firstName, lastName);
        this.hourlyValue = hourlyValue;
        this.workedHours = workedHours;
    }
    returnWage() {
        return this.hourlyValue * this.workedHours;
    }
}
const rnvDeveloper = new EmployeeCLT("RNV", "Developer", 15000);
const ratoMarrato = new EmployeePJ("Rato", "Marrato", 100, 200);
console.log(rnvDeveloper.issuePaycheck());
console.log(ratoMarrato.issuePaycheck());
