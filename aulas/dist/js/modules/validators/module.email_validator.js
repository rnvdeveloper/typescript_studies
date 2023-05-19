"use strict";
// // This is only an example that you can use the alias to change the imported function name
// import { IValidator as FormValidator } from "./module.validator";
// class EmailValidator implements FormValidator {
Object.defineProperty(exports, "__esModule", { value: true });
class EmailValidator {
    isValid(s) {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(s);
    }
}
exports.default = EmailValidator;
// export { EmailValidator };
