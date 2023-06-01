"use strict";
// sending null or undefined to functions
const greet = (name) => {
    if (name) {
        console.log(name.toLowerCase());
    }
    else {
        console.log('invalid');
    }
};
greet(undefined);
//# sourceMappingURL=index.js.map