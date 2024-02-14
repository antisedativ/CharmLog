import anyToString from '../utils/anyToString.js';
import { color } from '../utils/constants.js';

const handler = text => anyToString(text) + '\x1b[0m';

export const colors = {
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