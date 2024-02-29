import anyToString from '../utils/anyToString.js';
import { color } from '../utils/constants.js';

const handler = text => anyToString(text);

export const colors = {
	red: (...values) => console.log(color.red + values.map(handler).join(' ') + '\x1b[0m'),
	orange: (...values) => console.log(color.orange + values.map(handler).join(' ') + '\x1b[0m'),
	yellow: (...values) => console.log(color.yellow + values.map(handler).join(' ') + '\x1b[0m'),
	green: (...values) => console.log(color.green + values.map(handler).join(' ') + '\x1b[0m'),
	blue: (...values) => console.log(color.blue + values.map(handler).join(' ') + '\x1b[0m'),
	magenta: (...values) => console.log(color.magenta + values.map(handler).join(' ') + '\x1b[0m'),
	cyan: (...values) => console.log(color.cyan + values.map(handler).join(' ') + '\x1b[0m'),
	white: (...values) => console.log(color.white + values.map(handler).join(' ') + '\x1b[0m'),
	black: (...values) => console.log(color.black + values.map(handler).join(' ') + '\x1b[0m'),
};
