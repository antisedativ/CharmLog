import { TEXT_DECORATIONS, FONT_WEIGHTS, STYLES } from '../utils/constants.js';

interface ISettings {
	color: string;
	backgroundColor: string;
	style: typeof STYLES;
	fontWeight: typeof FONT_WEIGHTS;
	textDecoration: typeof TEXT_DECORATIONS;
}

declare class Settings {
	#color: string;
	#backgroundColor: string;
	#style: typeof STYLES;
	#fontWeight: typeof FONT_WEIGHTS;
	#textDecoration: typeof TEXT_DECORATIONS;

	get color(): string;
	set color(hexColor: string);

	get backgroundColor(): string;
	set backgroundColor(backgroundColor: string);

	get style(): typeof STYLES;
	set style(style: typeof STYLES);

	get fontWeight(): typeof FONT_WEIGHTS;
	set fontWeight(weight: typeof FONT_WEIGHTS);

	get textDecoration(): typeof TEXT_DECORATIONS;
	set textDecoration(style: typeof TEXT_DECORATIONS);

	setTextDecorationNone(): void;
	setTextDecorationUnderline(): void;
	setTextDecorationLineThrough(): void;
	setFontWeightNormal(): void;
	setFontWeightBold(): void;
	setStyleNormal(): void;
	setStyleItalic(): void;
	getAll(): ISettings;
	reset(): void;
}

export default Settings;
