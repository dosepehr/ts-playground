const nums = [1, 2] as const;

let obj: { readonly name: string } = <const>{ name: 'sepehr' };

// nums.push(12) --> error

const sum = (num1: number, num2: number): number => {
    return num1 + num2;
};

sum(...nums); // if we remove (as const) in line 1, we get error
