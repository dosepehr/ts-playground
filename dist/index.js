"use strict";
// optional element access operator
const find = (id) => {
    return id === 0 ? null : { birthDate: new Date() };
};
const customer = find(1);
console.log(customer?.birthDate.toLocaleTimeString());
// optional call operator
let log = null;
log?.('a');
//# sourceMappingURL=index.js.map