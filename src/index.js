import rainbow from './rainbow/rainbowMethod.js';
import printf from './formatters/LogFormatter.js';
import settings from './formatters/settings.js';
import { colors } from './oneColor/colorMethod.js';
import { Logger } from './logger/Logger.js';
import { createCharmedObject, charmprint } from './charmprint.js';

const charmlogMethods = {
	rainbow,
	printf,
	settings,
	...colors,
	charmprint,
	Logger,
};

export { rainbow, printf, settings, Logger, charmprint };
const charmlog = createCharmedObject(charmlogMethods);

export default charmlog;
