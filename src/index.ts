/*
- make a property optional
- make a property readonly
*/

const obj: {
    readonly id: number;
    name: string;
    age?: number;
} = {
    id: 1,
    name: 'sepehr',
    // age: 21,
};
