import { hexToAnsiColor } from '../utils/color.js';

export function printf(text, textFormat) {
	let ansiFormatCode = '';

	if (textFormat.color) ansiFormatCode += hexToAnsiColor(textFormat.color);

	if (textFormat.style)
		if (textFormat.style == 'normal') ansiFormatCode += '\x1b[23m';
		else if (textFormat.style == 'italic') ansiFormatCode += '\x1b[3m';

	if (textFormat.fontWeight)
		if (textFormat.fontWeight == 'normal') ansiFormatCode += '\x1b[22m';
		else if (textFormat.fontWeight == 'bold') ansiFormatCode += '\x1b[1m';

	if (textFormat.textDecoration)
		if (textFormat.textDecoration == 'none')
			ansiFormatCode += '\x1b[24;29m';
		else if (textFormat.textDecoration == 'underline')
			ansiFormatCode += '\x1b[4m';
		else if (textFormat.textDecoration == 'line-through')
			ansiFormatCode += '\x1b[9m';

	console.log(ansiFormatCode + text + '\x1b[0m');
}
