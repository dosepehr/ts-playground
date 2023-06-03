// refactor constructor
// make optional property
class Person {
    address?: string;
    constructor(
        public name: string,
        private email: string,
        protected age: number
    ) {}
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
    }
    setAge = (Age: number): void => {
        this.age = Age;
    };
    override get getEmail() {
        return this.name;
    }
}

const sepehr = new Person('sepehr', 'sepehr@gmail.com', 21);
sepehr.address='karaj'
const vahid = new Student(19.53, 'vahid', 'vahid@gmail.com', 30);



