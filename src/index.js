import rainbow from './rainbow/rainbowMethod.js';
import { printf } from './formatters/LogFormatter.js';
import settings from './formatters/LogFormatter.js';

const charmlog = { rainbow, printf, settings };

export { rainbow, printf, settings };

export default charmlog;
