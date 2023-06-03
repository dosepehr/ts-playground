"use strict";
let ali = {
    name: 'ali',
    // email: 'ali@gmail.com',
    login() {
        if (this.name == 'sepehr') {
            return true;
        }
        return false;
    },
};
const sepehr = {
    name: 'sepehr',
    email: 'sepehr@gmail.com',
    login() {
        if (this.name == 'sepehr') {
            return true;
        }
        return false;
    },
    deleteUser(id) {
        return `${id} has been deleted`;
    },
};
//# sourceMappingURL=index.js.map