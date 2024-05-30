import rainbow from './rainbow/rainbowMethod.js';
import printf from './formatters/LogFormatter.js';
import settings from './formatters/settings.js';
import { colors } from './oneColor/colorMethod.js';
import { Logger } from './logger/Logger.js';
<<<<<<< CLT-33
import { createCharmedObject, charmprint } from './charmprint.js';
=======
import dir from './dir/dir.js';
>>>>>>> master

const charmlogMethods = {
	rainbow,
	printf,
	settings,
	...colors,
<<<<<<< CLT-33
	charmprint,
=======
	dir
};

export {
	rainbow,
	printf,
	settings,
>>>>>>> master
	Logger,
	dir
};

export { rainbow, printf, settings, Logger, charmprint };
const charmlog = createCharmedObject(charmlogMethods);

export default charmlog;

