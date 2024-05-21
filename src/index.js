import rainbow from './rainbow/rainbowMethod.js';
import printf from './formatters/LogFormatter.js';
import settings from './formatters/settings.js';
import { colors } from './oneColor/colorMethod.js';
import { Logger } from './logger/Logger.js';
import { createCharmedObject, charmprint } from './charmprint.js';

const charmlog_raw = {
	rainbow,
	printf,
	settings,
	...colors,
	charmprint
};

export {
	rainbow,
	printf,
	settings,
	Logger,
	charmprint
};
const charmlog = createCharmedObject(charmlog_raw);

export default charmlog;


