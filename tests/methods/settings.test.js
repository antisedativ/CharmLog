import settings from '@src/formatters/settings';

describe('settings', () => {
	test('should set valid color format', () => {
		const color = '#efefef';
		settings.color = color;
		expect(settings.color).toEqual(color);
	});

	test('should set valid background color format', () => {
		const backgroundColor = '#090909';
		settings.backgroundColor = backgroundColor;
		expect(settings.backgroundColor).toEqual(backgroundColor);
	});

	test('should set valid style format', () => {
		const style = 'italic';
		settings.style = style;
		expect(settings.style).toEqual(style);
	});

	test('should set valid font weight format', () => {
		const fontWeight = 'bold';
		settings.fontWeight = fontWeight;
		expect(settings.fontWeight).toEqual(fontWeight);
	});

	test('should set valid text decoration format', () => {
		const textDecoration = 'underline';
		settings.textDecoration = textDecoration;
		expect(settings.textDecoration).toEqual(textDecoration);
	});

	test('should reset all settings to default', () => {
		const color = '#efefef';
		const expectedColor = '#ffffff';
        const backgroundColor = '#090909';
        const expectedBackgroundColor = 'transparent';
		const style = 'italic';
		const expectedStyle = 'normal';
		const fontWeight = 'bold';
		const expectedFontWeight = 'normal';
		const textDecoration = 'underline';
		const expectedTextDecoration = 'none';

        settings.color = color;
        settings.backgroundColor = backgroundColor;
        settings.style = style;
        settings.fontWeight = fontWeight;
        settings.textDecoration = textDecoration;
        
        settings.reset();

        expect(settings.color).toEqual(expectedColor);
        expect(settings.backgroundColor).toEqual(expectedBackgroundColor);
        expect(settings.style).toEqual(expectedStyle);
        expect(settings.fontWeight).toEqual(expectedFontWeight);
        expect(settings.textDecoration).toEqual(expectedTextDecoration);
	});
});
