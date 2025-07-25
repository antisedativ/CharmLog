import { hexToAnsiColor } from '../../utils/color';
import anyToString from '../../utils/anyToString';
import type { RainbowMethod } from '../../types/index';

export const colors: string[] = [
	'#FF0000',
	'#FF7F00',
	'#FFFF00',
	'#00FF00',
	'#00FFFF',
	'#0000FF',
	'#8F00FF',
];

const rainbow: RainbowMethod = function rainbow(...values: any[]): string {
	let result = '';
	values.forEach((value, index) => {
		const text = anyToString(value);
		for (let i = 0; i < text.length; i++) {
			const colorCode = hexToAnsiColor(colors[(i + index) % colors.length] || '#FF0000');
			result += colorCode + text[i];
		}
	});
	return result + '\x1b[0m';
};

export default rainbow;
