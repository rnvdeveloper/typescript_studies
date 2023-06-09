export {};

// Example 01
// In this example birthPlace and currentResidencePlace receives the same type that also inherits two different types, string and number.

type City = CityName | CityCoordinates;
type CityName = "São Paulo" | "Rio de Janeiros" | "Salvador" | "Belo Horizonte";
type CityCoordinates = {
    x: number;
    y: number;
};
type Person = {
    name: string;
    birthPlace: City;
    currentResidencePlace: City;
};

const person = {
    name: "Rnv Developer",
    birthPlace: "São Paulo",
    currentResidencePlace: { x: 20, y: 40 },
} satisfies Person;
console.log(person.birthPlace.toUpperCase());

// Example 02

type Connection = {};

declare function createConnection(
    host: string,
    port: string,
    reconnect: boolean,
    poolsize: number
): Connection;

type Configuration = {
    host: string;
    port: string | number;
    tryReconnect: boolean | (() => boolean);
    poolSize?: number;
};

const config = {
    host: "localhost",
    port: 3306,
    tryReconnect: () => true,
    poolSize: 10,
} satisfies Configuration;

function connect() {
    let { host, port, tryReconnect } = config;
    createConnection(host, `${port}`, tryReconnect(), 10);
}
