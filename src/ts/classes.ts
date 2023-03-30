class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person: Person = new Person("Rato", "Marrato");
console.log(person.fullName());
