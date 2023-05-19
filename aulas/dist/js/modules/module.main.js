"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validators_1 = require("./validators");
const module_email_validator_1 = __importDefault(require("./validators/module.email_validator"));
let email = 'rato@email.com';
let validatorForEmail = new module_email_validator_1.default();
let resultForEmail = validatorForEmail.isValid(email);
console.log(resultForEmail);
let zipCode = '11111';
let validatorForZipCode = new validators_1.ZipCodeValidator();
let resultForZipCode = validatorForZipCode.isValid(zipCode);
console.log(resultForZipCode);
