export {};

type User = {
    name: string;
    address: string;
    phone: string;
    age: number;
};

type UserMappedType = {
    [Prop in keyof User]?: User[Prop];
};

const userMapped: UserMappedType = {
    name: 'Rnv Developer',
    address: 'Development Street, 1'
}
console.log(userMapped);

interface IBook {
    author: string
    title: string
    pages: number
    price: number
}

type Article = Omit<IBook, 'pages'>
type BookModel = Readonly<IBook>

const book1: Article = {
    author: "A Author",
    title: 'A title',
    price: 20.00
}

const book2: BookModel = {
    author: "A Author",
    title: 'A title',
    pages: 200,
    price: 20.00
}

console.log(book1);
console.log(book2);