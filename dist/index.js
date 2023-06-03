"use strict";
// refactor constructor
// make optional property
class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    get getEmail() {
        return this.email;
    }
    set setEmail(email) {
        this.email = email;
    }
    static score() {
        console.log('score');
    }
}
class Student extends Person {
    constructor(avg, name, email, age) {
        super(name, email, age);
        this.avg = avg;
        this.setAge = (Age) => {
            this.age = Age;
        };
    }
    get getEmail() {
        return this.name;
    }
}
const sepehr = new Person('sepehr', 'sepehr@gmail.com', 21);
sepehr.address = 'karaj';
const vahid = new Student(19.53, 'vahid', 'vahid@gmail.com', 30);
//# sourceMappingURL=index.js.map