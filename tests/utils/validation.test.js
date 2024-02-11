import {
	colorValid,
	backgroundColorValid,
	styleValid,
	fontWeightValid,
	textDecorationValid,
} from '@src/utils/validation.js';

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
