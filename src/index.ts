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
