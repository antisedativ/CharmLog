import { hexToAnsiColor } from '../utils/color';
import anyToString from '../utils/anyToString';
import settings from './settings';
import type { PrintfMethod } from '../types/index';

interface SettingsData {
    color: string;
    backgroundColor: string;
    style: string;
    fontWeight: string;
    textDecoration: string;
}

const printf: PrintfMethod = function printf(format: string, ...args: any[]): string {
	const formatMap: Record<string, any> = {
		color: (color: string) => hexToAnsiColor(color),
		backgroundColor: (color: string) =>
			color === 'transparent'
				? ''
				: '\x1b[48' + hexToAnsiColor(color).slice(4),
		style: {
			normal: '\x1b[23m',
			italic: '\x1b[3m',
		},
		fontWeight: {
			normal: '\x1b[22m',
			bold: '\x1b[1m',
		},
		textDecoration: {
			none: '\x1b[24;29m',
			underline: '\x1b[4m',
			'line-through': '\x1b[9m',
		},
	};

	let ansiFormatCode = '';

	for (const [key, value] of Object.entries((settings as any).getAll())) {
		const format = formatMap[key];
		if (format) {
			if (typeof format === 'function') {
				ansiFormatCode += format(value as string);
			} else if (format[value as string]) {
				ansiFormatCode += format[value as string];
			}
		}
	}
	const formattedText = args.map(anyToString).join(' ');
	return ansiFormatCode + formattedText + '\x1b[0m';
};

export default printf; 