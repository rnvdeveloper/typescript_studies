export{}
// Never is a type that do not contain values and cannot be applied. This type is usually used to treat exception for example throwing an Error.

// // Example 01 - Throw exception
function errorFn(message: string): never {
  throw new Error(message);
}
console.log(errorFn("This is an error message!"));

// This is not a never function, is is classifed as Error type.
function rejectMessage() {
  return Error("This is a reject message!");
  //throw new Error("This is a reject message!");
}
console.log(rejectMessage());

function verificandoTipo(x: string | number): boolean {
  if (typeof x === "string") {
    console.log("true");
    return true;
  } else if (typeof x === "number") {
    console.log("false");
    return false;
  }

  return fail("Esse método não aceita esse tipo de type!");
}

function fail(message: string): never {
  throw new Error(message);
}

verificandoTipo("teste String"); //Ok
verificandoTipo(10); //Ok
let ativo = true;
//verificandoTipo(ativo); // Not acceptable
