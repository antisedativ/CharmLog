import { hexToAnsiColor } from '../utils/color.js';
import anyToString from '../utils/anyToString.js';

export const colors = [
	'#FF0000',
	'#FF7F00',
	'#FFFF00',
	'#00FF00',
	'#00FFFF',
	'#0000FF',
	'#8F00FF',
];

export default function rainbow(value) {
	let text = anyToString(value);
	let result = '';
	for (let i = 0; i < text.length; i++) {
		const color = hexToAnsiColor(colors[i % colors.length]);
		result += color + text[i];
	}
	console.log(result + '\x1b[0m');
}
