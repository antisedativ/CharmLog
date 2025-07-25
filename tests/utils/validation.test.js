import {
	colorValid,
	backgroundColorValid,
	styleValid,
	fontWeightValid,
	textDecorationValid,
} from '@utils/validation';

describe('colorValid', () => {
	test('should check valid hex color for validity and return true', () => {
		const color = '#efefef';
		const expected = true;
		expect(colorValid(color)).toEqual(expected);
	});

	test('should check invalid hex color for validity and return false', () => {
		const color = '#efcvef';
		const expected = false;
		expect(colorValid(color)).toEqual(expected);
	});

	test('should check valid short form hex color for validity and return true', () => {
		const color = '#efe';
		const expected = true;
		expect(colorValid(color)).toEqual(expected);
	});

	test('should check invalid short form hex color for validity and return false', () => {
		const color = '#eve';
		const expected = false;
		expect(colorValid(color)).toEqual(expected);
	});
});

describe('backgroundColorValid', () => {
	test('should check valid hex backgroundColor for validity and return true', () => {
		const backgroundColor = '#efefef';
		const expected = true;
		expect(backgroundColorValid(backgroundColor)).toEqual(expected);
	});

	test('should check invalid hex backgroundColor for validity and return false', () => {
		const backgroundColor = '#efcvef';
		const expected = false;
		expect(backgroundColorValid(backgroundColor)).toEqual(expected);
	});

	test('should check valid short form hex backgroundColor for validity and return true', () => {
		const backgroundColor = '#efe';
		const expected = true;
		expect(backgroundColorValid(backgroundColor)).toEqual(expected);
	});

	test('should check invalid short form hex backgroundColor for validity and return false', () => {
		const backgroundColor = '#eve';
		const expected = false;
		expect(backgroundColorValid(backgroundColor)).toEqual(expected);
	});

	test('should check "transparent" for validity and return true', () => {
		const backgroundColor = 'transparent';
		const expected = true;
		expect(backgroundColorValid(backgroundColor)).toEqual(expected);
	});
});

describe('styleValid', () => {
	test('should check valid style for validity and return true', () => {
		const style = 'italic';
		const expected = true;
		expect(styleValid(style)).toEqual(expected);
	});

	test('should check invalid style for validity and return false', () => {
		const style = 'italc';
		const expected = false;
		expect(styleValid(style)).toEqual(expected);
	});
});

describe('fontWeightValid', () => {
	test('should check valid font weight for validity and return true', () => {
		const fontWeight = 'bold';
		const expected = true;
		expect(fontWeightValid(fontWeight)).toEqual(expected);
	});

	test('should check invalid font weight for validity and return false', () => {
		const fontWeight = 'bld';
		const expected = false;
		expect(fontWeightValid(fontWeight)).toEqual(expected);
	});
});

describe('textDecorationValid', () => {
	test('should check valid text decoration for validity and return true', () => {
		const textDecoration = 'underline';
		const expected = true;
		expect(textDecorationValid(textDecoration)).toEqual(expected);
	});

	test('should check invalid text decoration for validity and return false', () => {
		const textDecoration = 'underlne';
		const expected = false;
		expect(textDecorationValid(textDecoration)).toEqual(expected);
	});
})
