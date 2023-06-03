"use strict";
class Manager {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    login() {
        return true;
    }
    deleteUser(id) {
        return `${id} has been deleted`;
    }
}
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
const manager = new Manager('mohammad', 'mmd@gmail.com');
//# sourceMappingURL=index.js.map