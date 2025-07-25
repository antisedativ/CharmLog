import { color } from '@utils/constants';
import { colors as colorMethods } from '@src/index';

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
