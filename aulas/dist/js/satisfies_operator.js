"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "Rnv Developer",
    birthPlace: "São Paulo",
    currentResidencePlace: { x: 20, y: 40 },
};
console.log(person.birthPlace.toUpperCase());
const config = {
    host: "localhost",
    port: 3306,
    tryReconnect: () => true,
    poolSize: 10,
};
function connect() {
    let { host, port, tryReconnect } = config;
    createConnection(host, `${port}`, tryReconnect(), 10);
}
