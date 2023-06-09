export {};
// Tips from Ayrton Teshima - YT: https://www.youtube.com/watch?v=SMd33Af8JJA
// Record - This tip using the keyof avoids the need to type every key of the type to the UserFields

// Example 01
interface User {
    name: string;
    email: string;
    address: string;
    document: string;
    cellphone: string;
}

interface Field {
    name: string;
    label: string;
}

// // You can use Omit or Partial. Omit will not allow the use of the property and display an error and Partial won't display any error. It can be used in this type or directly in the const user.
// type UserFields = Omit<Record<keyof User, Field>, 'cellphone'>
// type UserFields = Partial<Record<keyof User, Field>>
type UserFields = Record<keyof User, Field>;

const user: Partial<UserFields> = {
    name: { name: "name", label: "Type your name" },
    email: { name: "email", label: "Type your email" },
    address: { name: "address", label: "Type your address" },
    document: { name: "document", label: "Type your document number" },
    cellphone: { name: "cellphone", label: "Type your cellphone number" },
};

console.log(user);

// Example 02
// // Use get and set together is not recommended this, is just for education purpose
// type UseGettersAndSetters = Record<`${'get' | 'set'}${Capitalize<keyof User>}`, () => any>
type UseGetters = Record<`get${Capitalize<keyof User>}`, () => any>;

const userMethods: Partial<UseGetters> = {
    getName: () => "Rnv",
    getEmail: () => "email@email",
    getAddress: () => "Street 01",
};

// Example 03 - mapped
type Getters<AnyCategory> = {
    [Property in keyof AnyCategory as `get${Capitalize<
        keyof User
    >}`]: () => string;
};

const userMethods2: Getters<User> = {
    getName: () => "Rnv",
    getEmail: () => "email@email",
    getAddress: () => "Street 01",
    getDocument: () => "Street 01",
    getCellphone: () => "Street 01",
};
