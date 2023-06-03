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
console.log(ali.login());
//# sourceMappingURL=index.js.map