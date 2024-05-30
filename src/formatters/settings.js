import {
    colorValid,
    backgroundColorValid,
    styleValid,
    fontWeightValid,
    textDecorationValid,
} from '../utils/validation.js';
import { TEXT_DECORATIONS, FONT_WEIGHTS, STYLES } from '../utils/constants.js';

class PrivateSettings {

    #color = '#ffffff';
    #backgroundColor = 'transparent';
    #style = STYLES.NORMAL;
    #fontWeight = FONT_WEIGHTS.NORMAL;
    #textDecoration = TEXT_DECORATIONS.NONE;

    get color() {
        return this.#color;
    }
	/**
 * Цвет текста в формате HEX (например, '#ffffff')
 * @type {string}
 */
    set color(hexColor) {
        if (colorValid(hexColor)) this.#color = hexColor;
    }
/**
 * Цвет текста в формате HEX (например, '#ffffff') или transparent
 * @type {string}
 */
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

    setTextDecorationNone() {
        this.textDecoration = TEXT_DECORATIONS.NONE;
    }

    setTextDecorationUnderline() {
        this.textDecoration = TEXT_DECORATIONS.UNDERLINE;
    }

    setTextDecorationLineThrough() {
        this.textDecoration = TEXT_DECORATIONS.LINE_THROUGH;
    }

    setFontWeightNormal() {
        this.fontWeight = FONT_WEIGHTS.NORMAL;
    }

    setFontWeightBold() {
        this.fontWeight = FONT_WEIGHTS.BOLD;
    }

    setStyleNormal() {
        this.style = STYLES.NORMAL;
    }

    setStyleItalic() {
        this.style = STYLES.ITALIC;
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
        this.#style = STYLES.NORMAL;
        this.#fontWeight = FONT_WEIGHTS.NORMAL;
        this.#textDecoration = TEXT_DECORATIONS.NONE;
    }
}

const settings = new PrivateSettings();

export default settings;
