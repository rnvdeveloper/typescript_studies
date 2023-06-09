export{}
function addNum(x: number, y: number): number {
  return x + y;
}

function showMessage(message: string): void {
  console.log(message);
}

console.log(addNum(1, 1));
showMessage("me the message");

function sumNumbers(...numbers: number[]) {
  let total = 0;
  numbers.forEach((number) => (total += number));
  return total;
}

console.log(sumNumbers(10, 20));
