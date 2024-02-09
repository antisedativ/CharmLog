import rainbow from '@src/rainbow/rainbowMethod.js';
import { colors } from '@src/rainbow/rainbowMethod.js';
import { hexToAnsiColor } from '@utils/color.js';

describe('rainbow', () => {
	test('should return rainbow nums', () => {
		const text = 123;
		const expected = `${hexToAnsiColor(colors[0])}1${hexToAnsiColor(colors[1])}2${hexToAnsiColor(colors[2])}3\x1b[0m`;
		console.log = jest.fn();
		rainbow(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
	test('should return rainbow string', () => {
		const text = [];
		const expected = `${hexToAnsiColor(colors[0])}[${hexToAnsiColor(colors[1])}]\x1b[0m`;
		console.log = jest.fn();
		rainbow(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
});
