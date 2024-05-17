export default function charmprint(func) {
    return function(...args) {
        const result = func.apply(this, args);
        if (typeof result === 'string') {
            console.log(`${result}`);
        }
        return result;
    };
}

