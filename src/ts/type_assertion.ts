export {};
// let c_id: any = 23;
// // let customerId = <number>c_id
// let customerId = c_id as string;

// console.log(customerId);

// Example 1
// This example is a bit confuse and a clarification message was sent to instructor: In this cases seems that the "format" is already conditioning the return as a string or number making casting or assertion useless.
function showFinalPrice(price: number, discount: number, format: boolean) {
    const priceWithDiscount = price * (1 - discount)
    return format ? `R$ ${priceWithDiscount}` : priceWithDiscount
}

const discountFinal = showFinalPrice(100, .05, true)
console.log(discountFinal);


// // Example 2
// // This example returns an error as the property name does not exist in const human, the code will run however the error will be at the toLowerCase method.
// type Human = {
//     name: string;
//     age: number;
//     language: string;
// };

// const human = {
//     age: 36,
//     language: "Portuguese",
// };

// const human2 = human as Human
// console.log(human2.name.toLowerCase); // Cannot read properties of undefined (reading 'toLowerCase')


// // The solution is to defined human2 with Human type and then calls human, but adding the property name
// type Human = {
//     name: string;
//     age: number;
//     language: string;
// };

// const human = {
//     name: "Rnv",
//     age: 36,
//     language: "Portuguese",
// };

// console.log(human);

// const human2: Human = human
// console.log(human2.name.toLowerCase()); // Cannot read properties of undefined (reading 'toLowerCase')


