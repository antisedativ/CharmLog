import rainbow, { colors } from '@src/rainbow/rainbowMethod.js';
import { hexToAnsiColor } from '@utils/color.js';

describe('rainbow', () => {
    test('should return rainbow nums', () => {
        const text = 123;
        let expected = '';
        for (let i = 0; i < String(text).length; i++) {
            expected += `${hexToAnsiColor(colors[i % Object.keys(colors).length])}${String(text)[i]}`;
        }
        expected += '\x1b[0m';
        const result = rainbow(text);
        expect(result).toBe(expected);
    });
    test('should return rainbow string', () => {
        const text = 'hello';
        let expected = '';
        for (let i = 0; i < text.length; i++) {
            expected += `${hexToAnsiColor(colors[i % Object.keys(colors).length])}${text[i]}`;
        }
        expected += '\x1b[0m';
        const result = rainbow(text);
        expect(result).toBe(expected);
    });
});
