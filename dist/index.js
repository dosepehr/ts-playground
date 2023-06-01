"use strict";
/*
- make a type
- union types
*/
const user1 = {
    id: 1,
    name: 'sepehr',
    // age: 21,
    deleteUser: (id) => {
        return `user of ${id} deleted`;
    },
};
const user2 = {
    id: 2,
    name: 'ali',
    // age: 21,
    deleteUser: (id) => {
        return `user of ${id} deleted`;
    },
};
// user1 must have at least one properties of User """OR""" Admin
// user2 must have all properties of User """AND""" Admin
//# sourceMappingURL=index.js.map