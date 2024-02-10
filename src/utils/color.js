import { hexRegex } from './constants.js';

export function hexToAnsiColor(hexColor) {
	if (!hexRegex.test(hexColor)) {
		console.error('Invalid HEX color format');
		return;
	}

	let color = hexColor.startsWith('#') ? hexColor.slice(1) : hexColor; // Удаляем символ '#' если он есть
	if (color.length === 3 || color.length === 4) {
		// Если используется сокращенная запись, например, #abc или #abcd
		color = color.replace(/./g, '$&$&'); // Расширяем запись, чтобы получить полную шестизначную строку
	}

	const red = parseInt(color.slice(0, 2), 16);
	const green = parseInt(color.slice(2, 4), 16);
	const blue = parseInt(color.slice(4, 6), 16);

	return `\x1b[38;2;${red};${green};${blue}m`;
}

export function print(text, hexColor) {
	const ansiColorCode = hexToAnsiColor(hexColor);

	if (ansiColorCode) {
		console.log(ansiColorCode + text + '\x1b[0m');
	} else {
		console.error('Invalid color format or color not found');
	}
}
