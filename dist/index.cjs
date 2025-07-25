'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

function anyToString(value) {
    if (typeof value === 'string')
        return value;
    try {
        return JSON.stringify(value) || String(value);
    }
    catch (error) {
        return `Error: ${error.message}`;
    }
}

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

const handler = (text) => anyToString(text);
const colors$1 = {
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

function hexToAnsiColor(hexColor) {
    if (!hexRegex.test(hexColor)) {
        console.error('Invalid HEX color format');
        return '';
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

const colors = [
    '#FF0000',
    '#FF7F00',
    '#FFFF00',
    '#00FF00',
    '#00FFFF',
    '#0000FF',
    '#8F00FF',
];
const rainbow = function rainbow(...values) {
    let result = '';
    values.forEach((value, index) => {
        let text = anyToString(value);
        for (let i = 0; i < text.length; i++) {
            const colorCode = hexToAnsiColor(colors[(i + index) % colors.length] || '#FF0000');
            result += colorCode + text[i];
        }
    });
    return result + '\x1b[0m';
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function colorValid(color) {
    if (hexRegex.test(color))
        return true;
    else {
        console.error('Invalid color format');
        return false;
    }
}
function backgroundColorValid(backgroundColor) {
    if (hexRegex.test(backgroundColor) || backgroundColor === 'transparent')
        return true;
    else {
        console.error('Invalid background color format');
        return false;
    }
}
function styleValid(style) {
    const styleOptions = Object.values(STYLES);
    if (styleOptions.includes(style))
        return true;
    else {
        console.error('Invalid style format');
        return false;
    }
}
function fontWeightValid(fontWeight) {
    const fontWeightOptions = Object.values(FONT_WEIGHTS);
    if (fontWeightOptions.includes(fontWeight))
        return true;
    else {
        console.error('Invalid font weight format');
        return false;
    }
}
function textDecorationValid(textDecoration) {
    const textDecorationOptions = Object.values(TEXT_DECORATIONS);
    if (textDecorationOptions.includes(textDecoration))
        return true;
    else {
        console.error('Invalid text decoration format');
        return false;
    }
}

var _PrivateSettings_color, _PrivateSettings_backgroundColor, _PrivateSettings_style, _PrivateSettings_fontWeight, _PrivateSettings_textDecoration;
class PrivateSettings {
    constructor() {
        _PrivateSettings_color.set(this, '#ffffff');
        _PrivateSettings_backgroundColor.set(this, 'transparent');
        _PrivateSettings_style.set(this, STYLES.NORMAL);
        _PrivateSettings_fontWeight.set(this, FONT_WEIGHTS.NORMAL);
        _PrivateSettings_textDecoration.set(this, TEXT_DECORATIONS.NONE);
    }
    get color() {
        return __classPrivateFieldGet(this, _PrivateSettings_color, "f");
    }
    set color(hexColor) {
        if (colorValid(hexColor))
            __classPrivateFieldSet(this, _PrivateSettings_color, hexColor, "f");
    }
    get backgroundColor() {
        return __classPrivateFieldGet(this, _PrivateSettings_backgroundColor, "f");
    }
    set backgroundColor(backgroundColor) {
        if (backgroundColorValid(backgroundColor))
            __classPrivateFieldSet(this, _PrivateSettings_backgroundColor, backgroundColor, "f");
    }
    get style() {
        return __classPrivateFieldGet(this, _PrivateSettings_style, "f");
    }
    set style(style) {
        if (styleValid(style))
            __classPrivateFieldSet(this, _PrivateSettings_style, style, "f");
    }
    get fontWeight() {
        return __classPrivateFieldGet(this, _PrivateSettings_fontWeight, "f");
    }
    set fontWeight(weight) {
        if (fontWeightValid(weight))
            __classPrivateFieldSet(this, _PrivateSettings_fontWeight, weight, "f");
    }
    get textDecoration() {
        return __classPrivateFieldGet(this, _PrivateSettings_textDecoration, "f");
    }
    set textDecoration(style) {
        if (textDecorationValid(style))
            __classPrivateFieldSet(this, _PrivateSettings_textDecoration, style, "f");
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
            color: __classPrivateFieldGet(this, _PrivateSettings_color, "f"),
            backgroundColor: __classPrivateFieldGet(this, _PrivateSettings_backgroundColor, "f"),
            style: __classPrivateFieldGet(this, _PrivateSettings_style, "f"),
            fontWeight: __classPrivateFieldGet(this, _PrivateSettings_fontWeight, "f"),
            textDecoration: __classPrivateFieldGet(this, _PrivateSettings_textDecoration, "f"),
        };
    }
    reset() {
        __classPrivateFieldSet(this, _PrivateSettings_color, '#ffffff', "f");
        __classPrivateFieldSet(this, _PrivateSettings_backgroundColor, 'transparent', "f");
        __classPrivateFieldSet(this, _PrivateSettings_style, STYLES.NORMAL, "f");
        __classPrivateFieldSet(this, _PrivateSettings_fontWeight, FONT_WEIGHTS.NORMAL, "f");
        __classPrivateFieldSet(this, _PrivateSettings_textDecoration, TEXT_DECORATIONS.NONE, "f");
    }
}
_PrivateSettings_color = new WeakMap(), _PrivateSettings_backgroundColor = new WeakMap(), _PrivateSettings_style = new WeakMap(), _PrivateSettings_fontWeight = new WeakMap(), _PrivateSettings_textDecoration = new WeakMap();
const settings = new PrivateSettings();

const printf = function printf(format, ...args) {
    const formatMap = {
        color: (color) => hexToAnsiColor(color),
        backgroundColor: (color) => color === 'transparent'
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
            }
            else if (format[value]) {
                ansiFormatCode += format[value];
            }
        }
    }
    const formattedText = args.map(anyToString).join(' ');
    return ansiFormatCode + formattedText + '\x1b[0m';
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
        if (levelIndex === currentLevelIndex || (!this.singleMode && levelIndex > currentLevelIndex)) {
            console.log(`${logLevelColors[level]}[${level.toUpperCase()}] ${message}\x1b[0m`);
        }
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

const dir = function dir(obj, depth = 0, indent = '  ') {
    const indentation = indent.repeat(depth);
    let result = '';
    for (let prop in obj) {
        if (typeof obj[prop] === 'object' && obj[prop] !== null) {
            if (obj[prop] instanceof Set || obj[prop] instanceof Array) {
                const type = Object.prototype.toString.call(obj[prop]).slice(8, -1);
                result += `${indentation}${colors$1.red?.(prop) || prop}: ${colors$1.blue?.(`${type} ${[...obj[prop]]}`) || `${type} ${[...obj[prop]]}`}\n`;
            }
            else {
                result += `${indentation}${colors$1.red?.(prop) || prop}:\n`;
                result += dir(obj[prop], depth + 1, indent);
            }
        }
        else if (typeof obj[prop] === 'function') {
            result += `${indentation}${colors$1.red?.(prop) || prop}: ${colors$1.blue?.('function') || 'function'}\n`;
        }
        else {
            result += `${indentation}${colors$1.red?.(prop) || prop}: ${colors$1.blue?.(obj[prop]) || obj[prop]}\n`;
        }
    }
    return result;
};

// Core functionality
const charmlogMethods = {
    ...colors$1,
    printf,
    settings,
    charmprint,
    dir,
};
const charmlog = createCharmedObject(charmlogMethods);

exports.Logger = Logger;
exports.charmprint = charmprint;
exports.colors = colors$1;
exports.createCharmedObject = createCharmedObject;
exports.default = charmlog;
exports.dir = dir;
exports.printf = printf;
exports.rainbow = rainbow;
exports.settings = settings;
//# sourceMappingURL=index.cjs.map
