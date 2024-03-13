
import {charmlog} from '@src/index.js';
console.log(typeof charmlog);
describe('imports in index.js', () => {
    test('all modules are imported correctly', () => {
        Object.keys(charmlog).forEach((key) => {
            expect(charmlog[key]).toBeDefined();
        });
    });
  });