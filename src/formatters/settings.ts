import {
    colorValid,
    backgroundColorValid,
    styleValid,
    fontWeightValid,
    textDecorationValid,
} from '../utils/validation';
import { TEXT_DECORATIONS, FONT_WEIGHTS, STYLES } from '../utils/constants';

interface SettingsData {
    color: string;
    backgroundColor: string;
    style: string;
    fontWeight: string;
    textDecoration: string;
}

class PrivateSettings {
    #color: string = '#ffffff';
    #backgroundColor: string = 'transparent';
    #style: string = STYLES.NORMAL;
    #fontWeight: string = FONT_WEIGHTS.NORMAL;
    #textDecoration: string = TEXT_DECORATIONS.NONE;

    get color(): string {
        return this.#color;
    }

    set color(hexColor: string) {
        if (colorValid(hexColor)) this.#color = hexColor;
    }

    get backgroundColor(): string {
        return this.#backgroundColor;
    }
    set backgroundColor(backgroundColor: string) {
        if (backgroundColorValid(backgroundColor))
            this.#backgroundColor = backgroundColor;
    }

    get style(): string {
        return this.#style;
    }
    set style(style: string) {
        if (styleValid(style)) this.#style = style;
    }

    get fontWeight(): string {
        return this.#fontWeight;
    }
    set fontWeight(weight: string) {
        if (fontWeightValid(weight)) this.#fontWeight = weight;
    }

    get textDecoration(): string {
        return this.#textDecoration;
    }
    set textDecoration(style: string) {
        if (textDecorationValid(style)) this.#textDecoration = style;
    }

    setTextDecorationNone(): void {
        this.textDecoration = TEXT_DECORATIONS.NONE;
    }

    setTextDecorationUnderline(): void {
        this.textDecoration = TEXT_DECORATIONS.UNDERLINE;
    }

    setTextDecorationLineThrough(): void {
        this.textDecoration = TEXT_DECORATIONS.LINE_THROUGH;
    }

    setFontWeightNormal(): void {
        this.fontWeight = FONT_WEIGHTS.NORMAL;
    }

    setFontWeightBold(): void {
        this.fontWeight = FONT_WEIGHTS.BOLD;
    }

    setStyleNormal(): void {
        this.style = STYLES.NORMAL;
    }

    setStyleItalic(): void {
        this.style = STYLES.ITALIC;
    }

    getAll(): SettingsData {
        return {
            color: this.#color,
            backgroundColor: this.#backgroundColor,
            style: this.#style,
            fontWeight: this.#fontWeight,
            textDecoration: this.#textDecoration,
        };
    }

    reset(): void {
        this.#color = '#ffffff';
        this.#backgroundColor = 'transparent';
        this.#style = STYLES.NORMAL;
        this.#fontWeight = FONT_WEIGHTS.NORMAL;
        this.#textDecoration = TEXT_DECORATIONS.NONE;
    }
}

const settings = new PrivateSettings();

export default settings;
