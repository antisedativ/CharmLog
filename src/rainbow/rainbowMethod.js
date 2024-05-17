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

export default function rainbow(...values) {
	let result = '';
	values.forEach((value, index) => {
		let text = anyToString(value);
		for (let i = 0; i < text.length; i++) {
			const color = hexToAnsiColor(colors[(i + index) % colors.length]);
			result += color + text[i];
		}
	});
	return result + '\x1b[0m';
}
