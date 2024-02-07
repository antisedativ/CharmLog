export function colorValid(color) {
	const hexRegex = /^#([0-9A-Fa-f]{6})$/;
	if (hexRegex.test(color)) return 1;
	else {
		console.error('Invalid color format');
		return 0;
	}
}

export function backgroundColorValid(backgroundColor) {
	const hexRegex = /^#([0-9A-Fa-f]{6})$/;
	if (hexRegex.test(backgroundColor) || backgroundColor == 'transparent')
		return 1;
	else {
		console.error('Invalid background color format');
		return 0;
	}
}

export function styleValid(style) {
	const styleOptions = ['normal', 'italic'];
	if (styleOptions.includes(style)) return 1;
	else {
		console.error('Invalid style format');
		return 0;
	}
}

export function fontWeightValid(fontWeight) {
	const fontWeightOptions = ['normal', 'bold'];
	if (fontWeightOptions.includes(fontWeight)) return 1;
	else {
		console.error('Invalid font weight format');
		return 0;
	}
}

export function textDecorationValid(textDecoration) {
	const textDecorationOptions = ['none', 'underline', 'line-through'];
	if (textDecorationOptions.includes(textDecoration)) return 1;
	else {
		console.error('Invalid text decoration format');
		return 0;
	}
}
