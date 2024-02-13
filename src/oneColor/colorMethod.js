import { hexToAnsiColor } from '../utils/color.js';

export function red(value) {
    const color = hexToAnsiColor('#FF0000');
    return color + value + '\x1b[0m';
}

export function orange(value) {
    const color = hexToAnsiColor('#FF7F00');
    return color + value + '\x1b[0m';
}

export function yellow(value) {
    const color = hexToAnsiColor('#FFFF00') ;
    return color + value + '\x1b[0m';
}

export function green(value) {
    const color = hexToAnsiColor('#00FF00');
    return color + value + '\x1b[0m';
}

export function blue(value) {
    const color = hexToAnsiColor('#0000FF');
    return color + value + '\x1b[0m';
}

export function magenta(value) {
    const color = hexToAnsiColor('#bb2649');
    return color + value + '\x1b[0m';
}

export function cyan(value) {
    const color = hexToAnsiColor('#00FFFF');
    return color + value + '\x1b[0m';
}

export function white(value) {
    const color = hexToAnsiColor('#FFFFFF');
    return color + value + '\x1b[0m';
}

export function black(value) {
    const color = hexToAnsiColor('#000000');
    return color + value + '\x1b[0m';
}