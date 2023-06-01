const setCssProperty = (
    width: `${number}em` | `${number}px` | `${number}rem`
): string => {
    return width;
};

console.log(setCssProperty('12rem'));
