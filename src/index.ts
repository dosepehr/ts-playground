// sending null or undefined to functions

const greet = (name: string | null | undefined) => {
    if (name) {
        console.log(name.toLowerCase());
    } else {
        console.log('invalid');
    }
};

greet(undefined);

