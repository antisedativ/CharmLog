import { hexToAnsiColor } from '../utils/color.js';

class PrivateSettings {
	#color = '#ffffff';
	#backgroundColor = 'transparent';
	#style = 'normal';
	#fontWeight = 'normal';
	#textDecoration = 'none';

	get color() {
		return this.#color;
	}
	set color(hexColor) {
		this.#color = hexColor;
	}
	get backgroundColor() {
		return this.#backgroundColor;
	}
	set backgroundColor(hexBackgroundColor) {
		this.#backgroundColor = hexBackgroundColor;
	}
	get style() {
		return this.#style;
	}
	set style(style) {
		this.#style = style;
	}
	get fontWeight() {
		return this.#fontWeight;
	}
	set fontWeight(fontWeight) {
		this.#fontWeight = fontWeight;
	}
	get textDecoration() {
		return this.#textDecoration;
	}
	set textDecoration(textDecoration) {
		this.#textDecoration = textDecoration;
	}
	getAll() {
		return {
			color: this.#color,
			backgroundColor: this.#backgroundColor,
			style: this.#style,
			fontWeight: this.#fontWeight,
			textDecoration: this.#textDecoration,
		};
	}
	reset() {
		this.#color = '#ffffff';
		this.#backgroundColor = 'transparent';
		this.#style = 'normal';
		this.#fontWeight = 'normal';
		this.#textDecoration = 'none';
	}
}

const settings = new PrivateSettings();

export default settings;

export function printf(text) {
	const formatMap = {
		color: color => hexToAnsiColor(color),
		backgroundColor: color =>
			color == 'transparent'
				? ''
				: '\x1b[48' + hexToAnsiColor(color).slice(4),
		style: {
			normal: '\x1b[23m',
			italic: '\x1b[3m',
		},
		fontWeight: {
			normal: '\x1b[22m',
			bold: '\x1b[1m',
		},
		textDecoration: {
			none: '\x1b[24;29m',
			underline: '\x1b[4m',
			'line-through': '\x1b[9m',
		},
	};

	let ansiFormatCode = '';

	for (const [key, value] of Object.entries(settings.getAll())) {
		const format = formatMap[key];
		if (format) {
			if (typeof format === 'function') {
				ansiFormatCode += format(value);
			} else if (format[value]) {
				ansiFormatCode += format[value];
			}
		}
	}
	console.log(ansiFormatCode + text + '\x1b[0m');
}
