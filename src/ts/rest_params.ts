export{}
// Example 01
function sumNumbers(...numbers: number[]) {
    let total = 0;
    numbers.forEach((number) => (total += number));
    return total;
}
console.log(sumNumbers(1, 2, 3));

// Example 02
function listFruits(...fruits: string[]) {
    return fruits.join(", ");
}
console.log(listFruits("apple", "pineapple", "orange", "banana"));

// Example 03
class Products {
    public showProducts(...proucts: string[]): void {
        for (const product of proucts) {
            console.log(product);
        }
    }
}
const deptComputer: Products = new Products();
const deptOffice: Products = new Products();

console.log("All computer items available in storage");
deptComputer.showProducts("mouse", "laptop", "moniotr", "keyboard", "webcam");

console.log("All office items available in storage");
deptOffice.showProducts("pen", "paper", "notebook", "pencil");
