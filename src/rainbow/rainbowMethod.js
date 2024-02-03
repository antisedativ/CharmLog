import { hexToAnsiColor } from '../utils/color.js';
import anyToString from '../utils/anyToString.js';

export default function rainbow(value) {
	const text = anyToString(value);

	let result = '';
	const colors = [
		'#FF0000',
		'#FF7F00',
		'#FFFF00',
		'#00FF00',
		'#00FFFF',
		'#0000FF',
		'#8F00FF',
	];
	for (let i = 0; i < text.length; i++) {
		const color = hexToAnsiColor(colors[i % colors.length]);
		result += color + text[i];
	}
	console.log(result + '\x1b[0m');
}
