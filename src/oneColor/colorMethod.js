import anyToString from '../utils/anyToString.js';
import { color } from '../utils/constants.js';

const handler = text => anyToString(text);

export const colors = {
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
