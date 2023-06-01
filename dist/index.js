"use strict";
const nums = [1, 2];
let obj = { name: 'sepehr' };
// nums.push(12) --> error
const sum = (num1, num2) => {
    return num1 + num2;
};
sum(...nums); // if we remove (as const) in line 1, we get error
//# sourceMappingURL=index.js.map