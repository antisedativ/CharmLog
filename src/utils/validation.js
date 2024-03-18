import { hexRegex } from './constants.js';

export function colorValid(color) {
	if (hexRegex.test(color)) return true;
	else {
		console.error('Invalid color format');
		return false;
	}
}

export function backgroundColorValid(backgroundColor) {
	if (hexRegex.test(backgroundColor) || backgroundColor == 'transparent')
		return true;
	else {
		console.error('Invalid background color format');
		return false;
	}
}

export function styleValid(style) {
	const styleOptions = ['normal', 'italic'];
	if (styleOptions.includes(style)) return true;
	else {
		console.error('Invalid style format');
		return false;
	}
}

export function fontWeightValid(fontWeight) {
	const fontWeightOptions = ['normal', 'bold'];
	if (fontWeightOptions.includes(fontWeight)) return true;
	else {
		console.error('Invalid font weight format');
		return false;
	}
}

export function textDecorationValid(textDecoration) {
	const textDecorationOptions = ['none', 'underline', 'line-through'];
	if (textDecorationOptions.includes(textDecoration)) return true;
	else {
		console.error('Invalid text decoration format');
		return false;
	}
}

export function rgbColorValid() {
	if (arguments.length != 3) {
		console.error('Invalid rgb color format');
		return false;
	} else
		for (let i = 0; i < 3; i++) {
			if (
				typeof(arguments[i]) != 'number' ||
				arguments[i] < 0 ||
				arguments[i] > 255
			) {
				console.error('Invalid rgb color format');
				return false;
			}
		}
	return true;
}
