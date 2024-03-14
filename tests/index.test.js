import * as charm_moduls from '@src/index.js';
console.log(charm_moduls);
describe('imports in index.js', () => {
	test('all modules are imported correctly', () => {
		Object.keys(charm_moduls).forEach(key => {
			expect(charm_moduls[key]).toBeDefined();
		});
	});
});
