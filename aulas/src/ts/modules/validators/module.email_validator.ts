// // This is only an example that you can use the alias to change the imported function name
// import { IValidator as FormValidator } from "./module.validator";
// class EmailValidator implements FormValidator {

import IValidator from "./module.validator";

export default class EmailValidator implements IValidator {
    isValid(s: string): boolean {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(s);
    }
}

// export { EmailValidator };
