import anyToString from '../../utils/anyToString';
import { color } from '../../utils/constants';
import type { ColorMethod } from '../../types/index';

const handler = (text: any): string => anyToString(text);

export const colors: Record<string, ColorMethod> = {
	red: (...values: any[]): string => color.red + values.map(handler).join(' ') + '\x1b[0m',
	orange: (...values: any[]): string => color.orange + values.map(handler).join(' ') + '\x1b[0m',
	yellow: (...values: any[]): string => color.yellow + values.map(handler).join(' ') + '\x1b[0m',
	green: (...values: any[]): string => color.green + values.map(handler).join(' ') + '\x1b[0m',
	blue: (...values: any[]): string => color.blue + values.map(handler).join(' ') + '\x1b[0m',
	magenta: (...values: any[]): string => color.magenta + values.map(handler).join(' ') + '\x1b[0m',
	cyan: (...values: any[]): string => color.cyan + values.map(handler).join(' ') + '\x1b[0m',
	white: (...values: any[]): string => color.white + values.map(handler).join(' ') + '\x1b[0m',
	black: (...values: any[]): string => color.black + values.map(handler).join(' ') + '\x1b[0m',
};
