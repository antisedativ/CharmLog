import rainbow from './rainbow/rainbowMethod.js';
import printf from './formatters/LogFormatter.js';
import settings from './formatters/settings.js';
import { colors } from './oneColor/colorMethod.js';
import { Logger } from './logger/Logger.js';
const charmlog = {
	rainbow,
	printf,
	settings,
	...colors
};

export {
	rainbow,
	printf,
	settings,
	Logger
};

export default charmlog;
