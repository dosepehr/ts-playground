// diffrence betweemn type and interface
// 1 - interface can be modified
// 2 - interface can be inherited
interface User {
    name: string;
    email?: string; //making property optional

    login(): boolean;
}

let ali: User = {
    name: 'ali',
    // email: 'ali@gmail.com',
    login() {
        if (this.name == 'sepehr') {
            return true;
        }
        return false;
    },
};

console.log(ali.login());
