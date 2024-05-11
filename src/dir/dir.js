import { colors } from '../oneColor/colorMethod.js';

export default function dir(obj, depth = 0, indent = '  ') {
    const indentation = indent.repeat(depth);
    for (let prop in obj) {
        if (typeof obj[prop] === 'object' && obj[prop] !== null) {

            if (obj[prop] instanceof Set || obj[prop] instanceof Array) {
                const type = Object.prototype.toString.call(obj[prop]).slice(8, -1);
                console.log(`${indentation}${colors.red(prop)}:  ${colors.blue(type, [...obj[prop]])}`);
            } else {
                console.log(`${indentation}${colors.red(prop)}:`);
                dir(obj[prop], depth + 1, indent);
            }
        } else if (typeof obj[prop] === 'function') {
            console.log(`${indentation}${colors.red(prop)}: ${colors.blue('function')}`);
        } else {
            console.log(`${indentation}${colors.red(prop)}: ${colors.blue(obj[prop])}`);
        }
    }
}
