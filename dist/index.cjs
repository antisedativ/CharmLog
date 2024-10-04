'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const hexRegex = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;

const color = {
    orange: '\x1b[38;2;255;127;0m',
    red: '\x1b[38;2;255;0;0m',
    yellow: '\x1b[38;2;255;255;0m',
    green: '\x1b[38;2;0;255;0m',
    blue: '\x1b[38;2;0;0;255m',
    magenta: '\x1b[38;2;187;38;73m',
    cyan: '\x1b[38;2;0;255;255m',
    white: '\x1b[38;2;255;255;255m',
    black: '\x1b[38;2;0;0;0m',
    ligth_red: '\x1b[38;2;255;40;65m'
};

const logLevelColors = {
    debug: color.white,
    info: color.blue,
    warning: color.orange,
    error: color.ligth_red,
    critical: color.red
};

const TEXT_DECORATIONS = {
    NONE: 'none',
    UNDERLINE: 'underline',
    LINE_THROUGH: 'line-through',
};

const FONT_WEIGHTS = {
    NORMAL: 'normal',
    BOLD: 'bold',
};

const STYLES = {
    NORMAL: 'normal',
    ITALIC: 'italic',
};

function hexToAnsiColor(hexColor) {
	if (!hexRegex.test(hexColor)) {
		console.error('Invalid HEX color format');
		return;
	}

	let color = hexColor.startsWith('#') ? hexColor.slice(1) : hexColor; // Удаляем символ '#' если он есть
	if (color.length === 3 || color.length === 4) {
		// Если используется сокращенная запись, например, #abc или #abcd
		color = color.replace(/./g, '$&$&'); // Расширяем запись, чтобы получить полную шестизначную строку
	}

	const red = parseInt(color.slice(0, 2), 16);
	const green = parseInt(color.slice(2, 4), 16);
	const blue = parseInt(color.slice(4, 6), 16);

	return `\x1b[38;2;${red};${green};${blue}m`;
}

function anyToString(value) {
	if (typeof value === 'string') return value;
	try {
		return JSON.stringify(value) || String(value);
	} catch (error) {
		return `Error: ${error.message}`;
	}
}

const colors$1 = [
	'#FF0000',
	'#FF7F00',
	'#FFFF00',
	'#00FF00',
	'#00FFFF',
	'#0000FF',
	'#8F00FF',
];

function rainbow(...values) {
	let result = '';
	values.forEach((value, index) => {
		let text = anyToString(value);
		for (let i = 0; i < text.length; i++) {
			const color = hexToAnsiColor(colors$1[(i + index) % colors$1.length]);
			result += color + text[i];
		}
	});
	return result + '\x1b[0m';
}

function colorValid(color) {
	if (hexRegex.test(color)) return true;
	else {
		console.error('Invalid color format');
		return false;
	}
}

function backgroundColorValid(backgroundColor) {

	if (hexRegex.test(backgroundColor) || backgroundColor == 'transparent')
		return true;
	else {
		console.error('Invalid background color format');
		return false;
	}
}

function styleValid(style) {
	const styleOptions = Object.values(STYLES);
	if (styleOptions.includes(style)) return true;
	else {
		console.error('Invalid style format');
		return false;
	}
}

function fontWeightValid(fontWeight) {
	const fontWeightOptions = Object.values(FONT_WEIGHTS);
	if (fontWeightOptions.includes(fontWeight)) return true;
	else {
		console.error('Invalid font weight format');
		return false;
	}
}

function textDecorationValid(textDecoration) {
	const textDecorationOptions = Object.values(TEXT_DECORATIONS);
	if (textDecorationOptions.includes(textDecoration)) return true;
	else {
		console.error('Invalid text decoration format');
		return false;
	}
}

class PrivateSettings {
    #color = '#ffffff';
    #backgroundColor = 'transparent';
    #style = STYLES.NORMAL;
    #fontWeight = FONT_WEIGHTS.NORMAL;
    #textDecoration = TEXT_DECORATIONS.NONE;

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
    set fontWeight(weight) {
        if (fontWeightValid(weight)) this.#fontWeight = weight;
    }

    get textDecoration() {
        return this.#textDecoration;
    }
    set textDecoration(style) {
        if (textDecorationValid(style)) this.#textDecoration = style;
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

function printf(...args) {
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
	const formattedText = args.map(anyToString).join(' ');
	return ansiFormatCode + formattedText + '\x1b[0m';
}

const handler = text => anyToString(text);

const colors = {
	red: (...values) => color.red + values.map(handler).join(' ') + '\x1b[0m',
	orange: (...values) => color.orange + values.map(handler).join(' ') + '\x1b[0m',
	yellow: (...values) => color.yellow + values.map(handler).join(' ') + '\x1b[0m',
	green: (...values) => color.green + values.map(handler).join(' ') + '\x1b[0m',
	blue: (...values) => color.blue + values.map(handler).join(' ') + '\x1b[0m',
	magenta: (...values) => color.magenta + values.map(handler).join(' ') + '\x1b[0m',
	cyan: (...values) => color.cyan + values.map(handler).join(' ') + '\x1b[0m',
	white: (...values) => color.white + values.map(handler).join(' ') + '\x1b[0m',
	black: (...values) => color.black + values.map(handler).join(' ') + '\x1b[0m',
};

class Logger {
  constructor(logLevel, singleMode) {
    this.logLevel = logLevel ?? 'debug';
    this.singleMode = singleMode ?? false;
  }

  setLogLevel(logLevel, singleMode = false) {
    this.logLevel = logLevel;
    this.singleMode = singleMode;
  }

  log(message, level = 'debug') {
    const levels = ['debug', 'info', 'warning', 'error', 'critical'];
    const levelIndex = levels.indexOf(level);
    const currentLevelIndex = levels.indexOf(this.logLevel);
    if (levelIndex == currentLevelIndex || (!this.singleMode && levelIndex > currentLevelIndex))
      console.log(`${logLevelColors[level]}[${level.toUpperCase()}] ${message}\x1b[0m`);
  }

  reset() {
    this.singleMode = false;
    this.logLevel = 'debug';
  }

  debug(message) {
    this.log(message, 'debug');
  }

  info(message) {
    this.log(message, 'info');
  }

  warning(message) {
    this.log(message, 'warning');
  }

  error(message) {
    this.log(message, 'error');
  }

  critical(message) {
    this.log(message, 'critical');
  }
}

function charmprint(func) {
	return function (...args) {
		const result = func.apply(this, args);
		if (typeof result === 'string') {
			console.log(`${result}`);
		}
		return result;
	};
}

function createCharmedObject(obj) {
	return new Proxy(obj, {
		get(target, property, receiver) {
			const origMethod = target[property];
			if (typeof origMethod === 'function') {
				return charmprint(origMethod).bind(target);
			}
			return Reflect.get(target, property, receiver);
		},
	});
}

function dir(obj, depth = 0, indent = '  ') {
    const indentation = indent.repeat(depth);
    let result = '';
    for (let prop in obj) {
        if (typeof obj[prop] === 'object' && obj[prop] !== null) {
            if (obj[prop] instanceof Set || obj[prop] instanceof Array) {
                const type = Object.prototype.toString.call(obj[prop]).slice(8, -1);
                result += `${indentation}${colors.red(prop)}: ${colors.blue(type, [...obj[prop]])}\n`;
            } else {
                result += `${indentation}${colors.red(prop)}:\n`;
                result += dir(obj[prop], depth + 1, indent);
            }
        } else if (typeof obj[prop] === 'function') {
            result += `${indentation}${colors.red(prop)}: ${colors.blue('function')}\n`;
        } else {
            result += `${indentation}${colors.red(prop)}: ${colors.blue(obj[prop])}\n`;
        }
    }
    return result;
}

const charmlogMethods = {
	rainbow,
	printf,
	settings,
	...colors,
	charmprint,
	dir,
};

const charmlog = createCharmedObject(charmlogMethods);

exports.Logger = Logger;
exports.charmprint = charmprint;
exports.default = charmlog;
exports.dir = dir;
exports.printf = printf;
exports.rainbow = rainbow;
exports.settings = settings;
