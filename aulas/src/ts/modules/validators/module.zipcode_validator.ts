import IValidator from "./module.validator";

class ZipCodeValidator implements IValidator {
    isValid(s: string): boolean {
        const zipCodeRegex = /^\d{5}$/;
        return zipCodeRegex.test(s);
    }
}

export { ZipCodeValidator };
