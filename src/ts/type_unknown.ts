export{}
// unknown accepts any type such as number, boolean, arrays, strings but does not accept methods, values and constructors

// Example 01: In this example we are not changing the type but only inserting values to the variableValue
let variableValue: unknown;
variableValue = true;
variableValue = 123;
variableValue = [];
variableValue = "Hi";
console.log(variableValue);

// // Example 02: In this example the error message alert that you cannot assign other type for the unknow 
// let newVariableValue: unknown
// let newVariableValue1: boolean = newVariableValue
// let newVariableValue2: number = newVariableValue
// let newVariableValue3: any[] = newVariableValue
// let newVariableValue4: string = newVariableValue

// xample 03: Unknown type checks the type prior to execution different from any that accepts any type without checking
let anyValue: any;
let unknownValue: unknown;
console.log(anyValue.toFixed(2));
//console.log(unknownValue.toFixed(2)); // this attribution shows a type error.

if (typeof unknownValue === "number") {
   console.log(unknownValue.toFixed(2));
}
