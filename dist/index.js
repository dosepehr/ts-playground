"use strict";
const sepehr = {
    name: 'sepehr',
    privileges: ['1', '2', '3'],
};
const showProps = (member) => {
    // return member.startDate --> error
    if ('startDate' in member) {
        return member.startDate;
    }
    else {
        return;
    }
};
console.log(showProps(sepehr));
//# sourceMappingURL=index.js.map