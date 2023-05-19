"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Any is standard in Typescript, however its use is highly not recommended as it excludes the typing and does not display error messages during development, however it may cause errors in the runtime
// Example 01: This example should return an error as we are summing different type of data, however, as the variable b is typed as any, there is no error alert by typescript.
const a = 88;
const b = "rnvdeveloper";
const result = a + b;
console.log(result);
// Example 02: In this case, there is no error mesage, however the method .lenght is not assignable to numbers and this will return an error that is not alerted by typescript
const anyVariable = 10;
console.log(anyVariable.length);
