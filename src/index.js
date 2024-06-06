import rainbow from './rainbow/rainbowMethod.js';
import printf from './formatters/LogFormatter.js';
import settings from './formatters/settings.js';
import { colors } from './oneColor/colorMethod.js';
import { Logger } from './logger/Logger.js';
import { createCharmedObject, charmprint } from './charmprint.js';
import dir from './dir/dir.js';

const charmlogMethods = {
	rainbow,
	printf,
	settings,
	...colors,
	charmprint,
	dir,
};

const charmlog = createCharmedObject(charmlogMethods);

export { rainbow, printf, settings, Logger, dir, charmprint };

export default charmlog;
