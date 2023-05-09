import { ZipCodeValidator } from "./validators";
import EmailValidator from "./validators/module.email_validator";

let email = 'rato@email.com'
let validatorForEmail = new EmailValidator()
let resultForEmail = validatorForEmail.isValid(email)
console.log(resultForEmail);

let zipCode = '11111'
let validatorForZipCode = new ZipCodeValidator()
let resultForZipCode = validatorForZipCode.isValid(zipCode)
console.log(resultForZipCode);
