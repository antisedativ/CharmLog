export default function hexToAnsiColor(hexColor) {
	const hexRegex = /^#([0-9A-Fa-f]{6})$/;
	if (!hexRegex.test(hexColor)) {
		console.error('Invalid HEX color format');
		return;
	}

	const red = parseInt(hexColor.slice(1, 3), 16);
	const green = parseInt(hexColor.slice(3, 5), 16);
	const blue = parseInt(hexColor.slice(5, 7), 16);

	return `\x1b[38;2;${red};${green};${blue}m`;
}