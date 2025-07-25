import dir from '@src/utils/dir/dir';
import { colors } from '@src/colors/basic/colorMethod';

describe('dir', () => {
    test('should correctly format object properties and their types', () => {
        const obj = {
            a: 123,
            b: {
                bb: 'hello',
                ba: () => { }
            },
            c: [1, 2, 3],
            d: 'world'
        };

        const expectedResult = `${colors.red('a')}: ${colors.blue(123)}\n` +
                               `${colors.red('b')}:\n` +
                               `  ${colors.red('bb')}: ${colors.blue('hello')}\n` +
                               `  ${colors.red('ba')}: ${colors.blue('function')}\n` +
                               `${colors.red('c')}: ${colors.blue('Array 1,2,3')}\n` +
                               `${colors.red('d')}: ${colors.blue('world')}\n`;

        expect(dir(obj)).toEqual(expectedResult);
    });
});
