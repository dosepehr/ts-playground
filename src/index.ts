// ts tuple
let tuple: [number, number, number, string] = [1, 2, 3, 's'];
// ts array
let arr: (number | string)[] = [1, 2, 3, 's'];
// ts obj
let obj: {
    name: string;
    age: number;
    walk: (canWalk: boolean) => string;
} = {
    name: 'sepehr',
    age: 20,
    walk: function (canWalk: boolean) {
        if (canWalk) {
            return `${this.name} can walk`;
        }
        return `${this.name} can't walk`;
    },
};
