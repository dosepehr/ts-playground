// optional element access operator

type Customer = {
    birthDate: Date;
};

const find = (id: number): Customer | null => {
    return id === 0 ? null : { birthDate: new Date() };
};

const customer = find(1);
console.log(customer?.birthDate.toLocaleTimeString());

// optional call operator

let log: any = null;

log?.('a');
