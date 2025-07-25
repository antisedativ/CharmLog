import { hexRegex, TEXT_DECORATIONS, FONT_WEIGHTS, STYLES } from './constants';

export function colorValid(color: string): boolean {
	if (hexRegex.test(color)) return true;
	else {
		console.error('Invalid color format');
		return false;
	}
}

export function backgroundColorValid(backgroundColor: string): boolean {
	if (hexRegex.test(backgroundColor) || backgroundColor === 'transparent')
		return true;
	else {
		console.error('Invalid background color format');
		return false;
	}
}

export function styleValid(style: string): boolean {
	const styleOptions = Object.values(STYLES);
	if (styleOptions.includes(style as any)) return true;
	else {
		console.error('Invalid style format');
		return false;
	}
}

export function fontWeightValid(fontWeight: string): boolean {
	const fontWeightOptions = Object.values(FONT_WEIGHTS);
	if (fontWeightOptions.includes(fontWeight as any)) return true;
	else {
		console.error('Invalid font weight format');
		return false;
	}
}

export function textDecorationValid(textDecoration: string): boolean {
	const textDecorationOptions = Object.values(TEXT_DECORATIONS);
	if (textDecorationOptions.includes(textDecoration as any)) return true;
	else {
		console.error('Invalid text decoration format');
		return false;
	}
}
