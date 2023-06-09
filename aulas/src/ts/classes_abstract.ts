export {};

abstract class Employee {
    constructor(protected firstName: string, protected lastName: string) {}

    get returnEmployeeFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    abstract returnWage(): number;

    public issuePaycheck(): string {
        return `Employee name: ${
            this.returnEmployeeFullName
        } - Wage: ${this.returnWage()}`;
    }
}

class EmployeeCLT extends Employee {
    constructor(firstName: string, lastName: string, protected wage: number) {
        super(firstName, lastName);
    }

    returnWage(): number {
        return this.wage;
    }
}

class EmployeePJ extends Employee {
    constructor(
        firstName: string,
        lastName: string,
        protected hourlyValue: number,
        protected workedHours: number
    ) {
        super(firstName, lastName);
    }

    returnWage(): number {
        return this.hourlyValue * this.workedHours;
    }
}

const rnvDeveloper = new EmployeeCLT("RNV", "Developer", 15000);
const ratoMarrato = new EmployeePJ("Rato", "Marrato", 100, 200);
console.log(rnvDeveloper.issuePaycheck());
console.log(ratoMarrato.issuePaycheck());
