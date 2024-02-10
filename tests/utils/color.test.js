import { print, hexToAnsiColor } from '@src/utils/color.js';

describe('hexToAnsiColor', () => {
	test('should convert valid hex color to ANSI color code', () => {
		const hexColor = '#00ff00';
		const expected = '\x1b[38;2;0;255;0m';
		expect(hexToAnsiColor(hexColor)).toEqual(expected);
	});

	test('should handle invalid hex color format', () => {
		const hexColor = 'invalidHex';
		console.error = jest.fn(); // Мокируем console.error
		hexToAnsiColor(hexColor);
		expect(console.error).toHaveBeenCalledWith('Invalid HEX color format');
	});

	test('should handle short form hex color', () => {
		const hexColor = '#0f0'; // Сокращенная запись цвета
		const expected = '\x1b[38;2;0;255;0m'; // Ожидаемый результат для полного шестизначного значения
		expect(hexToAnsiColor(hexColor)).toEqual(expected);
	});

	test('should handle short form hex color with alpha channel', () => {
		const hexColor = '#0f0f'; // Сокращенная запись цвета с альфа-каналом
		const expected = '\x1b[38;2;0;255;0m'; // Ожидаемый результат для полного шестизначного значения
		expect(hexToAnsiColor(hexColor)).toEqual(expected);
	});
});

describe('print', () => {
	test('should print with valid hex color', () => {
		const hexColor = '#00ff00';
		const text = 'This is a test text';
		const expected = `\x1b[38;2;0;255;0m${text}\x1b[0m`;

		console.log = jest.fn(); // Mock console.log
		print(text, hexColor);

		expect(console.log).toHaveBeenCalledWith(expected);
	});

	test('should handle invalid hex color format', () => {
		const hexColor = 'invalidHex';
		const text = 'This is a test text';

		console.error = jest.fn(); // Mock console.error
		print(text, hexColor);

		expect(console.error).toHaveBeenCalledWith(
			'Invalid color format or color not found'
		);
	});
});
