/*
- make an argument optional
- giving an argument default value
*/
const calculateTax = (income = 10, taxYear?: number): number => {
    if (taxYear) {
        return income * 1.2;
    }
    return income * 1.3;
};

calculateTax(1, 2);
