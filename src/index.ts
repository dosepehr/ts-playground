// type guards
// 1 - in
// 2 - typeof
// 3 - instanceof
type Admin = {
    name: string;
    privileges: string[];
};
type Teacher = {
    name: string;
    startDate: Date;
};

const sepehr: Admin | Teacher = {
    name: 'sepehr',
    privileges: ['1', '2', '3'],
};

const showProps = (member: Admin | Teacher) => {
    // return member.startDate --> error
    if ('startDate' in member) {
        return member.startDate;
    } else {
        return;
    }
};

console.log(showProps(sepehr));
