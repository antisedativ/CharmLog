import rainbow from './rainbow/rainbowMethod.js';
import printf from './formatters/printf.js';
import settings from './formatters/Settings.js';
import { colors } from './oneColor/colorMethod.js';
import { Logger } from './logger/Logger.js';
import { createCharmedObject, charmprint } from './charmprint.js';
import dir from './dir/dir.js';

declare const charmlogMethods: {
	rainbow: typeof rainbow;
	printf: typeof printf;
	settings: typeof settings;
	red: typeof colors.red;
	orange: typeof colors.orange;
	yellow: typeof colors.yellow;
	green: typeof colors.green;
	blue: typeof colors.blue;
	magenta: typeof colors.magenta;
	cyan: typeof colors.cyan;
	white: typeof colors.white;
	black: typeof colors.black;
	charmprint: typeof charmprint;
	dir: typeof dir;
};

declare const charmlog: ReturnType<typeof createCharmedObject> & typeof charmlogMethods;

export { rainbow, printf, settings, Logger, dir, charmprint };
export default charmlog;
