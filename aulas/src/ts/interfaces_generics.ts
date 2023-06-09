export {};
// import fetch from 'isomorphic-fetch'

// // Example 01
// interface IPair<T, U> {
//     first: T;
//     second: U;
// }
// const myPair: IPair<number, string> = {
//     first: 41,
//     second: "Rnv",
// };
// console.log(myPair);

// // Example 02 - Fetching an API, this is for education purpose only and does not reflect a quality real life example
// interface IFetchResponse<T> {
//     data: T;
//     status: number;
//     statusText: string;
//     headers: Record<string, string>;
// }

// async function fetchJson<T>(url: string): Promise<IFetchResponse<T>> {
//     const response = await fetch(url);
//     const headers: Record<string, string> = {};
//     response.headers.forEach((key, value) => {
//         headers[key] = value;
//     });

//     const data = await response.json();

//     return {
//         data: data as T,
//         status: data.status,
//         statusText: data.statusText,
//         headers,
//     };
// }

// (async () => {
//     const response = await fetchJson<{ title: string }>(
//         "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     console.log(response.data.title);
// })();

interface FetchResponse<T> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
}

async function fetchJson<T>(url: string): Promise<FetchResponse<T>> {
    const response = await fetch(url);
    const headers: Record<string, string> = {};
    response.headers.forEach((value: any, key: any) => {
        headers[key] = value;
    });

    const data = await response.json();
    
    return {
        data: data as T,
        status: response.status,
        statusText: response.statusText,
        headers,
    };
}

(async () => {
    const response = await fetchJson<{ completed: boolean }>(
        "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(response.data.completed);
})();
