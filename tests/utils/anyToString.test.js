import anyToString from '@utils/anyToString';

describe('anyToString', () => {
	it('should convert number to string', () => {
		expect(anyToString(42)).toBe('42');
	});

	it('should convert string to string', () => {
		expect(anyToString('Hello')).toContain('Hello');
	});

	it('should convert boolean to string', () => {
		expect(anyToString(true)).toBe('true');
	});

	it('should convert array to string', () => {
		expect(anyToString([1, 2, 3])).toBe('[1,2,3]');
	});

	it('should convert object to string', () => {
		expect(anyToString({ key: 'value' })).toBe('{"key":"value"}');
	});
});

describe('anyToString function', () => {
	test('handles circular structures', () => {
		const circularObject = {};
		circularObject.circularReference = circularObject;

		// Ожидаем, что вызов anyToString вернет строку, содержащую подстроку "Error: Converting circular structure to JSON"
		expect(anyToString(circularObject)).toContain(
			'Error: Converting circular structure to JSON'
		);
	});
});
