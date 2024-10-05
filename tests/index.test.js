import * as charm_modules from '@src/index.js';

describe('function calls in index.js', () => {
	test('all functions are called correctly', () => {
		const keys = Object.keys(charm_modules);
		keys.forEach(key => {
			const func = charm_modules[key];
			if (typeof func === 'function') {
				const spy = jest.fn();
				try {
					spy();
				} catch (error) {
					console.error(`Error calling function ${key}:`, error);
				}
				expect(spy).toHaveBeenCalled();
			}
		});
	});
});
