// Core functionality
export { charmprint, createCharmedObject } from './core/charmprint';

// Color methods
export * from './colors/index';

// Formatters
export { default as printf } from './formatters/printf';
export { default as settings } from './formatters/settings';

// Logger
export { Logger } from './logger/Logger';

// Utilities
export { default as dir } from './utils/dir/dir';

// Types
export type * from './types/index';

// Default export with all methods
import { createCharmedObject } from './core/charmprint';
import { colors } from './colors/index';
import printf from './formatters/printf';
import settings from './formatters/settings';
import dir from './utils/dir/dir';
import { charmprint } from './core/charmprint';

const charmlogMethods = {
	...colors,
	printf,
	settings,
	charmprint,
	dir,
};

const charmlog = createCharmedObject(charmlogMethods);

export default charmlog; 