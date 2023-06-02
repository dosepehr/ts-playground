// access modifiers
// 1- public --> default
// 2- public --> value is only accessable in class block
// 3- protected --> value is only accessable in class block and its sub classes
// 4- readonly --> could not be changed
class Person {
    constructor(
        public name: string,
        private email: string,
        protected age: number
    ) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    get getEmail() {
        return this.email;
    }
    set setEmail(email: string) {
        this.email = email;
    }
    static score() {
        console.log('score');
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

// getter
console.log(sepehr.getEmail);

// setter
sepehr.setEmail = 'dosepehr@gmail.com';
console.log(sepehr.getEmail);




Person.score()