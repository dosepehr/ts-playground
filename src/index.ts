/*
- make a type
- union types
*/

type User = {
    readonly id: number;
    name: string;
    age?: number;
};

type Admin = {
    deleteUser: (id: number) => string;
};

const user1: User | Admin = {
    id: 1,
    name: 'sepehr',
    // age: 21,
    deleteUser: (id: number) => {
        return `user of ${id} deleted`;
    },
};

const user2: User & Admin = {
    id: 2,
    name: 'ali',
    // age: 21,
    deleteUser: (id: number) => {
        return `user of ${id} deleted`;
    },
};


// user1 must have at least one properties of User """OR""" Admin
// user2 must have all properties of User """AND""" Admin