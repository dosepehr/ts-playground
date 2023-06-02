// access modifiers
// 1- public --> default
// 2- public --> value is only accessable in class block
// 3- protected --> value is only accessable in class block and its sub classes
// 4- readonly --> could not be changed
class Person {
    constructor(
        public name: string,
        protected email: string,
        protected age: number
    ) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

class Student extends Person {
    constructor(public avg: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.avg = avg;
    }
    setAge = (Age: number): void => {
        this.age = Age;
    };
}

const sepehr = new Person('sepehr', 'sepehr@gmail.com', 21);
const vahid = new Student(19.53, 'vahid', 'vahid@gmail.com', 30);

vahid.setAge(59);

console.log(vahid);
