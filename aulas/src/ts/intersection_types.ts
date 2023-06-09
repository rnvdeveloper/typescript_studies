export {};

// Example 01
interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
}

interface IAddress {
    city: string;
    street: string;
    number: number;
}

interface IPersonWithAddress extends IPerson, IAddress {
    country: string;
}

type PersonWithAddressType = IPerson &
    IAddress & {
        country: string;
    };

const person1: IPersonWithAddress = {
    firstName: "Good",
    lastName: "Nameforme",
    age: 30,
    city: "Nice City",
    street: "Relaxing Street",
    number: 1,
    country: "Wonderful Country",
};

const person2: PersonWithAddressType = {
    firstName: "Good",
    lastName: "Nameforme",
    age: 30,
    city: "Nice City",
    street: "Relaxing Street",
    number: 1,
    country: "Wonderful Country",
};

console.log(person1);
console.log(person2);

// Exampelo 02
interface IAccountData {
    bankName: string;
    bankBranchNumber: number;
    accountNumber: number;
}

interface IClient {
    name: string;
    email: string;
}

interface IPrivateIndividual {
    cpfNumber: number;
}

type ClientData = IClient & IPrivateIndividual & IAccountData;

const anyClient: ClientData = {
    name: "Good Name",
    email: "goodname@good.com",
    cpfNumber: 12345687999,
    bankName: "A Bank",
    bankBranchNumber: 20,
    accountNumber: 23577,
};

console.log(anyClient);