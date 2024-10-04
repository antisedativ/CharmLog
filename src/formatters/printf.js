import { hexToAnsiColor } from '../utils/color.js';
import anyToString from '../utils/anyToString.js';
import settings from './Settings.js';

export default function printf(...args) {
	const formatMap = {
		color: color => hexToAnsiColor(color),
		backgroundColor: color =>
			color == 'transparent'
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

	for (const [key, value] of Object.entries(settings.getAll())) {
		const format = formatMap[key];
		if (format) {
			if (typeof format === 'function') {
				ansiFormatCode += format(value);
			} else if (format[value]) {
				ansiFormatCode += format[value];
			}
		}
	}
	const formattedText = args.map(anyToString).join(' ');
	return ansiFormatCode + formattedText + '\x1b[0m';
}
