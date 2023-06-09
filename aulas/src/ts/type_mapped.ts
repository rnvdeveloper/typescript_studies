export {};

// Example 01
type User = {
    name: string;
    address: string;
    phone: string;
    age: number;
};

type UserMappedType = {
    [Prop in keyof User]?: User[Prop];
};

const userMapped: UserMappedType = {
    name: "Rnv Developer",
    address: "Development Street, 1",
};
console.log(userMapped);

// Example 02
interface User2 {
    name: string;
    email: string;
    address: string;
    document: string;
    cellphone: string;
}

type Getters<AnyCategory> = {
    [Property in keyof AnyCategory as `get${Capitalize<
        keyof User2
    >}`]: () => string;
};

const userMethods2: Getters<User> = {
    getName: () => "Rnv",
    getEmail: () => "email@email",
    getAddress: () => "Street 01",
    getDocument: () => "Street 01",
    getCellphone: () => "Street 01",
};
console.log(userMethods2);
