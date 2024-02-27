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

// Convert any value to string
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

function rainbow(value) {
	let text = anyToString(value);
	let result = '';
	for (let i = 0; i < text.length; i++) {
		const color = hexToAnsiColor(colors$1[i % colors$1.length]);
		result += color + text[i];
	}
	console.log(result + '\x1b[0m');
}

function colorValid(color) {
	if (hexRegex.test(color)) return 1;
	else {
		console.error('Invalid color format');
		return 0;
	}
}

function backgroundColorValid(backgroundColor) {
	if (hexRegex.test(backgroundColor) || backgroundColor == 'transparent')
		return 1;
	else {
		console.error('Invalid background color format');
		return 0;
	}
}

function styleValid(style) {
	const styleOptions = ['normal', 'italic'];
	if (styleOptions.includes(style)) return 1;
	else {
		console.error('Invalid style format');
		return 0;
	}
}

function fontWeightValid(fontWeight) {
	const fontWeightOptions = ['normal', 'bold'];
	if (fontWeightOptions.includes(fontWeight)) return 1;
	else {
		console.error('Invalid font weight format');
		return 0;
	}
}

function textDecorationValid(textDecoration) {
	const textDecorationOptions = ['none', 'underline', 'line-through'];
	if (textDecorationOptions.includes(textDecoration)) return 1;
	else {
		console.error('Invalid text decoration format');
		return 0;
	}
}

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

function printf(text) {
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
	console.log(ansiFormatCode + anyToString(text) + '\x1b[0m');
}

const handler = text => anyToString(text) + '\x1b[0m';

const colors = {
	red: value => console.log(color.red + handler(value)),
	orange: value => console.log(color.orange + handler(value)),
	yellow: value => console.log(color.yellow + handler(value)),
	green: value => console.log(color.green + handler(value)),
	blue: value => console.log(color.blue + handler(value)),
	magenta: value => console.log(color.magenta + handler(value)),
	cyan: value => console.log(color.cyan + handler(value)),
	white: value => console.log(color.white + handler(value)),
	black: value => console.log(color.black + handler(value)),
};

class Logger {
  constructor(logLevel, single_mode) {
    this.logLevel = logLevel ?? 'debug';
    this.single_mode = single_mode ?? false;
  }

  setLogLevel(logLevel, single_mode = false) {
    this.logLevel = logLevel;
    this.single_mode = single_mode;
  }

  log(message, level = 'info') {
    const levels = ['debug', 'info', 'warning', 'error', 'critical'];
    const levelIndex = levels.indexOf(level);
    const currentLevelIndex = levels.indexOf(this.logLevel);
    if (levelIndex == currentLevelIndex || (!this.single_mode && levelIndex > currentLevelIndex))
      console.log(`${logLevelColors[level]}[${level.toUpperCase()}] ${message}\x1b[0m`);
  }

  reset() {
    this.single_mode = false;
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

const charmlog = {
	rainbow,
	printf,
	settings,
	...colors
};

export { Logger, charmlog as default, printf, rainbow, settings };
