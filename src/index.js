import rainbow from './rainbow/rainbowMethod.js';
import printf from './formatters/LogFormatter.js';
import settings from './formatters/settings.js';
import { colors } from './oneColor/colorMethod.js';
import { Logger } from './logger/Logger.js';
import dir from './dir/dir.js';

const charmlog = {
	rainbow,
	printf,
	settings,
	...colors,
	dir
};

export {
	rainbow,
	printf,
	settings,
	Logger,
	dir
};

export default charmlog;

