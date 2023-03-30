// unknown accepts any type such as number, boolean, arrays, strings and etc.

// In this example we are not changing the type but only inserting values to the variableValue
let variableValue: unknown;
variableValue = true;
variableValue = 123;
variableValue = [];
variableValue = "Hi";
console.log(variableValue);

// // In this example the error message alert that unknow cannot be applied to the other types.
// let newVariableValue: unknown
// let newVariableValue1: boolean = newVariableValue
// let newVariableValue2: number = newVariableValue
// let newVariableValue3: any[] = newVariableValue
// let newVariableValue4: string = newVariableValue

// unknown checks the types prior to execution different from any that accepts any type without checking
let anyValue: any;
let unknownValue: unknown;
console.log(anyValue.toFixed(2));
//console.log(unknownValue.toFixed(2)); // this attribution shows a type error.

if (typeof unknownValue === "number") {
   console.log(unknownValue.toFixed(2));
}
