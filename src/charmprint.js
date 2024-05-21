function charmprint(func) {
    return function(...args) {
        const result = func.apply(this, args);
        if (typeof result === 'string') {
            console.log(`${result}`);
        }
        return result;
    };
}

function createCharmedObject(obj) {
    return new Proxy(obj, {
        get(target, property, receiver) {
            const origMethod = target[property];
            if (typeof origMethod === 'function') {
                return charmprint(origMethod).bind(target);
            }
            return Reflect.get(target, property, receiver);
        }
    });
}

export  {charmprint, createCharmedObject}