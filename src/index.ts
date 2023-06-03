// diffrence betweemn type and interface
// 1 - interface can be modified
// 2 - interface can be inherited
interface User {
    name: string;
    email?: string; //making property optional

    login(): boolean;
}

interface Admin extends User {
    deleteUser(id: number): string;
}

class Manager implements Admin {
    constructor(public name: string, public email: string) {}
    login(): boolean {
        return true;
    }
    deleteUser(id: number): string {
        return `${id} has been deleted`;
    }
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

const sepehr: Admin = {
    name: 'sepehr',
    email: 'sepehr@gmail.com',
    login() {
        if (this.name == 'sepehr') {
            return true;
        }
        return false;
    },
    deleteUser(id: number): string {
        return `${id} has been deleted`;
    },
};

const manager = new Manager('mohammad', 'mmd@gmail.com');
