import { color } from '@src/utils/constants.js';
import { colors as colorMethods } from '@src/oneColor/colorMethod.js';

describe('color', () => {
    test('should return colored nums', () => {
        const text = 123;
        for(const hue in colorMethods){
            const expected = color[hue] + text + '\x1b[0m';
            console.log = jest.fn();
            colorMethods[hue](text);
            expect(console.log).toHaveBeenCalledWith(expected);
        }
    });
});
