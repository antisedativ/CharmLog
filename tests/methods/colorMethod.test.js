import { color } from '@src/utils/constants.js';
import { colors as colorMethods } from '@src/index.js';

describe('color', () => {
    test('should return colored nums', () => {
        const text = 123;
        for (const hue in colorMethods) {
            const expected = color[hue] + text + '\x1b[0m';
            const mockColorMethod = jest.fn().mockReturnValue(expected);
            colorMethods[hue] = mockColorMethod;
            const result = colorMethods[hue](text);
            expect(mockColorMethod).toHaveBeenCalledWith(text);
            expect(result).toEqual(expected);
        }
    });
});
