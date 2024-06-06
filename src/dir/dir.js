import { colors } from '../oneColor/colorMethod.js';

export default function dir(obj, depth = 0, indent = '  ') {
    const indentation = indent.repeat(depth);
    let result = '';
    for (let prop in obj) {
        if (typeof obj[prop] === 'object' && obj[prop] !== null) {
            if (obj[prop] instanceof Set || obj[prop] instanceof Array) {
                const type = Object.prototype.toString.call(obj[prop]).slice(8, -1);
                result += `${indentation}${colors.red(prop)}: ${colors.blue(type, [...obj[prop]])}\n`;
            } else {
                result += `${indentation}${colors.red(prop)}:\n`;
                result += dir(obj[prop], depth + 1, indent);
            }
        } else if (typeof obj[prop] === 'function') {
            result += `${indentation}${colors.red(prop)}: ${colors.blue('function')}\n`;
        } else {
            result += `${indentation}${colors.red(prop)}: ${colors.blue(obj[prop])}\n`;
        }
    }
    return result;
}
