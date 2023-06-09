export {};

// // Example 01
// type Person = {
//     name: string;
//     age: number;
//     address: string;
// };

// type Company = {
//     name: string;
//     cnpj: number;
// };

// type AddressPerson = {
//     addressSecondary: string;
//     city: string;
//     country: string;
// };

// type AddressCompany = {
//     location: "street" | "avenue" | "square";
// };

// type AddressFinal<T> = T extends { address: string }
//     ? AddressPerson
//     : AddressCompany;

// const personAddress: AddressFinal<Person> = {
//     addressSecondary: "Development Street",
//     city: "City of Development",
//     country: "Developmentland",
// };
// const companyAddress: AddressFinal<Company> = {
//     location: "avenue",
// };

// console.log(personAddress);
// console.log(companyAddress);


// Example 02
type ExtensionType = 'png' | 'jpg' | 'gif' | 'svg' | 'mp4' | 'mp3'

type filterAudioExtension<T> = T extends 'mp3' | 'mp4' ? T : never
type filterImageExtension<T> = T extends 'png' | 'jpg' | 'gif' | 'svg' ? T : never

type AudioExtension = filterAudioExtension<ExtensionType>
type ImageExtension = filterImageExtension<ExtensionType>

const audioFile: AudioExtension = 'mp3'
const imageFile: ImageExtension = 'svg'

console.log(audioFile, imageFile);
