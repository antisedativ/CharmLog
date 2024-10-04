type Level = 'debug' | 'info' | 'warning' | 'error' | 'critical';

export declare class Logger {
	constructor(logLevel?: string, singleMode?: boolean);
	setLogLevel(logLevel: string, singleMode?: boolean): void;
	log(message: T, level?: Level): void;
	reset(): void;
	debug(message: T): void;
	info(message: T): void;
	warning(message: T): void;
	error(message: T): void;
	critical(message: T): void;
}

export default Logger;
