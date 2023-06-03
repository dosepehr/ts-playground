"use strict";
// refactor constructor
// make optional property
class Person {
    name;
    email;
    age;
    address;
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
    avg;
    constructor(avg, name, email, age) {
        super(name, email, age);
        this.avg = avg;
    }
    setAge = (Age) => {
        this.age = Age;
    };
}
const sepehr = new Person('sepehr', 'sepehr@gmail.com', 21);
sepehr.address = 'karaj';
console.log(sepehr);
const vahid = new Student(19.53, 'vahid', 'vahid@gmail.com', 30);
const ali = new Person('ali', 'ksk', 20);
//# sourceMappingURL=index.js.map