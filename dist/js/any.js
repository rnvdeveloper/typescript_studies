"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Any is standard in Typescript, however its use is highly not recommended as it accepts any type
// This example should return an error as we are summing different type of data, however, as the variables are typed as any, there is no error noticed by typescript.
const a = 88;
const b = "rnvdeveloper";
const result = a + b;
console.log(result);
