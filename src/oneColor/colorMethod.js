import { hexToAnsiColor } from '../utils/color.js';
import anyToString from '../utils/anyToString.js';

export function red(value) {
	let text = anyToString(value);
	const color = hexToAnsiColor('#FF0000');
	console.log(color + text + '\x1b[0m');
}

export function orange(value) {
	let text = anyToString(value);
	const color = hexToAnsiColor('#FF7F00');
	console.log(color + text + '\x1b[0m');
}

export function yellow(value) {
	let text = anyToString(value);
	const color = hexToAnsiColor('#FFFF00');
	console.log(color + text + '\x1b[0m');
}

export function green(value) {
	let text = anyToString(value);
	const color = hexToAnsiColor('#00FF00');
	console.log(color + text + '\x1b[0m');
}

export function blue(value) {
	let text = anyToString(value);
	const color = hexToAnsiColor('#0000FF');
	console.log(color + text + '\x1b[0m');
}

export function magenta(value) {
	let text = anyToString(value);
	const color = hexToAnsiColor('#bb2649');
	console.log(color + text + '\x1b[0m');
}

export function cyan(value) {
	let text = anyToString(value);
	const color = hexToAnsiColor('#00FFFF');
	console.log(color + text + '\x1b[0m');
}

export function white(value) {
	let text = anyToString(value);
	const color = hexToAnsiColor('#FFFFFF');
	console.log(color + text + '\x1b[0m');
}

export function black(value) {
	let text = anyToString(value);
	const color = hexToAnsiColor('#000000');
	console.log(color + text + '\x1b[0m');
}
