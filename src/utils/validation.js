import { hexRegex } from './constants.js';
import { TEXT_DECORATIONS, FONT_WEIGHTS, STYLES } from '../utils/constants.js';
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
	const styleOptions = Object.values(STYLES);
	if (styleOptions.includes(style)) return true;
	else {
		console.error('Invalid style format');
		return false;
	}
}

export function fontWeightValid(fontWeight) {
	const fontWeightOptions = Object.values(FONT_WEIGHTS);
	if (fontWeightOptions.includes(fontWeight)) return true;
	else {
		console.error('Invalid font weight format');
		return false;
	}
}

export function textDecorationValid(textDecoration) {
	const textDecorationOptions = Object.values(TEXT_DECORATIONS);
	if (textDecorationOptions.includes(textDecoration)) return true;
	else {
		console.error('Invalid text decoration format');
		return false;
	}
}
