import dir from '@src/dir/dir.js';
import { colors } from '@src/oneColor/colorMethod.js';

describe('dir', () => {
    let consoleLogSpy;

    beforeEach(() => {
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
    });

    test('should correctly log object properties and their types', () => {
        const obj = {
            a: 123,
            b: {
                bb: 'hello',
                ba: () => { }
            },
            c: [1, 2, 3],
            d: 'world'
        };

        dir(obj);

        expect(consoleLogSpy).toHaveBeenCalledWith(`${colors.red('a')}: ${colors.blue(123)}`);
        expect(consoleLogSpy).toHaveBeenCalledWith(`${colors.red('b')}:`);
        expect(consoleLogSpy).toHaveBeenCalledWith(`  ${colors.red('bb')}: ${colors.blue('hello')}`);
        expect(consoleLogSpy).toHaveBeenCalledWith(`  ${colors.red('ba')}: ${colors.blue('function')}`);
        expect(consoleLogSpy).toHaveBeenCalledWith(`${colors.red('c')}:  ${colors.blue('Array [1,2,3]')}`);
        expect(consoleLogSpy).toHaveBeenCalledWith(`${colors.red('d')}: ${colors.blue('world')}`);
    });
});