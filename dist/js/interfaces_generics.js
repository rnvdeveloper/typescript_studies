"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_fetch_1 = __importDefault(require("isomorphic-fetch"));
async function fetchJson(url) {
    const response = await (0, isomorphic_fetch_1.default)(url);
    const headers = {};
    response.headers.forEach((value, key) => {
        headers[key] = value;
    });
    const data = await response.json();
    return {
        data: data,
        status: response.status,
        statusText: response.statusText,
        headers,
    };
}
(async () => {
    const response = await fetchJson("https://jsonplaceholder.typicode.com/todos/1");
    console.log(response.data.completed);
})();
