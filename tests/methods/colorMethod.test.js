import * as color from '@src/oneColor/colorMethod.js';
import { hexToAnsiColor } from '@utils/color.js';

describe('test red color', () => {
	test('should return red nums', () => {
		const text = 123;
		const expected = `${hexToAnsiColor('#FF0000')}123\x1b[0m`;
		console.log = jest.fn();
		color.red(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
	test('should return red string', () => {
		const text = [];
		const expected = `${hexToAnsiColor('#FF0000')}[]\x1b[0m`;;
		console.log = jest.fn();
		color.red(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
    test('should return red true', () => {
		const text = true;
		const expected = `${hexToAnsiColor('#FF0000')}true\x1b[0m`;;
		console.log = jest.fn();
		color.red(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
});

describe('test orange color', () => {
	test('should return orange nums', () => {
		const text = 123;
		const expected = `${hexToAnsiColor('#FF7F00')}123\x1b[0m`;
		console.log = jest.fn();
		color.orange(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
	test('should return orange string', () => {
		const text = [];
		const expected = `${hexToAnsiColor('#FF7F00')}[]\x1b[0m`;;
		console.log = jest.fn();
		color.orange(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
    test('should return orange true', () => {
		const text = true;
		const expected = `${hexToAnsiColor('#FF7F00')}true\x1b[0m`;;
		console.log = jest.fn();
		color.orange(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
});

describe('test yellow color', () => {
	test('should return yellow nums', () => {
		const text = 123;
		const expected = `${hexToAnsiColor('#FFFF00')}123\x1b[0m`;
		console.log = jest.fn();
		color.yellow(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
	test('should return yellow string', () => {
		const text = [];
		const expected = `${hexToAnsiColor('#FFFF00')}[]\x1b[0m`;;
		console.log = jest.fn();
		color.yellow(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
    test('should return yellow true', () => {
		const text = true;
		const expected = `${hexToAnsiColor('#FFFF00')}true\x1b[0m`;;
		console.log = jest.fn();
		color.yellow(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
});

describe('test green color', () => {
	test('should return green nums', () => {
		const text = 123;
		const expected = `${hexToAnsiColor('#00FF00')}123\x1b[0m`;
		console.log = jest.fn();
		color.green(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
	test('should return green string', () => {
		const text = [];
		const expected = `${hexToAnsiColor('#00FF00')}[]\x1b[0m`;;
		console.log = jest.fn();
		color.green(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
    test('should return green true', () => {
		const text = true;
		const expected = `${hexToAnsiColor('#00FF00')}true\x1b[0m`;;
		console.log = jest.fn();
		color.green(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
});

describe('test blue color', () => {
	test('should return blue nums', () => {
		const text = 123;
		const expected = `${hexToAnsiColor('#0000FF')}123\x1b[0m`;
		console.log = jest.fn();
		color.blue(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
	test('should return blue string', () => {
		const text = [];
		const expected = `${hexToAnsiColor('#0000FF')}[]\x1b[0m`;;
		console.log = jest.fn();
		color.blue(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
    test('should return blue true', () => {
		const text = true;
		const expected = `${hexToAnsiColor('#0000FF')}true\x1b[0m`;;
		console.log = jest.fn();
		color.blue(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
});

describe('test magenta color', () => {
	test('should return magenta nums', () => {
		const text = 123;
		const expected = `${hexToAnsiColor('#bb2649')}123\x1b[0m`;
		console.log = jest.fn();
		color.magenta(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
	test('should return magenta string', () => {
		const text = [];
		const expected = `${hexToAnsiColor('#bb2649')}[]\x1b[0m`;;
		console.log = jest.fn();
		color.magenta(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
    test('should return magenta true', () => {
		const text = true;
		const expected = `${hexToAnsiColor('#bb2649')}true\x1b[0m`;;
		console.log = jest.fn();
		color.magenta(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
});

describe('test cyan color', () => {
	test('should return cyan nums', () => {
		const text = 123;
		const expected = `${hexToAnsiColor('#00FFFF')}123\x1b[0m`;
		console.log = jest.fn();
		color.cyan(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
	test('should return cyan string', () => {
		const text = [];
		const expected = `${hexToAnsiColor('#00FFFF')}[]\x1b[0m`;;
		console.log = jest.fn();
		color.cyan(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
    test('should return cyan true', () => {
		const text = true;
		const expected = `${hexToAnsiColor('#00FFFF')}true\x1b[0m`;;
		console.log = jest.fn();
		color.cyan(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
});

describe('test white color', () => {
	test('should return white nums', () => {
		const text = 123;
		const expected = `${hexToAnsiColor('#FFFFFF')}123\x1b[0m`;
		console.log = jest.fn();
		color.white(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
	test('should return white string', () => {
		const text = [];
		const expected = `${hexToAnsiColor('#FFFFFF')}[]\x1b[0m`;;
		console.log = jest.fn();
		color.white(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
    test('should return white true', () => {
		const text = true;
		const expected = `${hexToAnsiColor('#FFFFFF')}true\x1b[0m`;;
		console.log = jest.fn();
		color.white(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
});

describe('test black color', () => {
	test('should return black nums', () => {
		const text = 123;
		const expected = `${hexToAnsiColor('#000000')}123\x1b[0m`;
		console.log = jest.fn();
		color.black(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
	test('should return black string', () => {
		const text = [];
		const expected = `${hexToAnsiColor('#000000')}[]\x1b[0m`;;
		console.log = jest.fn();
		color.black(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
    test('should return black true', () => {
		const text = true;
		const expected = `${hexToAnsiColor('#000000')}true\x1b[0m`;;
		console.log = jest.fn();
		color.black(text);
		expect(console.log).toHaveBeenCalledWith(expected);
	});
});