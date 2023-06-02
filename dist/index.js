"use strict";
class Person {
    name;
    email;
    age;
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}
class Student extends Person {
    avg;
    constructor(avg, name, email, age) {
        super(name, email, age);
        this.avg = avg;
    }
}
const sepehr = new Person('sepehr', 'sepehr@gmail.com', 21);
const ali = { name: 'ali', email: 'ali@gmail.com', age: 20 };
const persons = [sepehr, ali];
const vahid = new Student(19.53, 'vahid', 'vahid@gmail.com', 30);
//# sourceMappingURL=index.js.map