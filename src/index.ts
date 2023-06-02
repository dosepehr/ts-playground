class Person {
    name: string;
    email: string;
    age: number;
    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

class Student extends Person {
    avg: number;
    constructor(avg: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.avg = avg;
    }
}

const sepehr = new Person('sepehr', 'sepehr@gmail.com', 21);

const ali: Person = { name: 'ali', email: 'ali@gmail.com', age: 20 };

const persons: Person[] = [sepehr, ali];

const vahid = new Student(19.53, 'vahid', 'vahid@gmail.com', 30);
