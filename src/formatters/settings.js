import {
	colorValid,
	backgroundColorValid,
	styleValid,
	fontWeightValid,
	textDecorationValid,
} from '../utils/validation.js';

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
		if (colorValid(hexColor)) this.#color = hexColor;
	}
	get backgroundColor() {
		return this.#backgroundColor;
	}
	set backgroundColor(backgroundColor) {
		if (backgroundColorValid(backgroundColor))
			this.#backgroundColor = backgroundColor;
	}
	get style() {
		return this.#style;
	}
	set style(style) {
		if (styleValid(style)) this.#style = style;
	}
	get fontWeight() {
		return this.#fontWeight;
	}
	set fontWeight(fontWeight) {
		if (fontWeightValid(fontWeight)) this.#fontWeight = fontWeight;
	}
	get textDecoration() {
		return this.#textDecoration;
	}
	set textDecoration(textDecoration) {
		if (textDecorationValid(textDecoration))
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
