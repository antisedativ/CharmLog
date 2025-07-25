import { colors } from '../../colors/basic/colorMethod';
import type { DirMethod } from '../../types/index';

const dir: DirMethod = function dir(obj: any, depth: number = 0, indent: string = '  '): string {
    const indentation = indent.repeat(depth);
    let result = '';
    for (let prop in obj) {
        if (typeof obj[prop] === 'object' && obj[prop] !== null) {
            if (obj[prop] instanceof Set || obj[prop] instanceof Array) {
                const type = Object.prototype.toString.call(obj[prop]).slice(8, -1);
                result += `${indentation}${colors.red?.(prop) || prop}: ${colors.blue?.(`${type} ${[...obj[prop]]}`) || `${type} ${[...obj[prop]]}`}\n`;
            } else {
                result += `${indentation}${colors.red?.(prop) || prop}:\n`;
                result += dir(obj[prop], depth + 1, indent);
            }
        } else if (typeof obj[prop] === 'function') {
            result += `${indentation}${colors.red?.(prop) || prop}: ${colors.blue?.('function') || 'function'}\n`;
        } else {
            result += `${indentation}${colors.red?.(prop) || prop}: ${colors.blue?.(obj[prop]) || obj[prop]}\n`;
        }
    }
    return result;
};

export default dir; 