import getCurrentDateTime from '@src/utils/getCurrentDateTime.js';

describe('getCurrentDateTime', () => {
	describe('Time formatting', () => {
		test('Should return time in HH:mm format', () => {
			const result = getCurrentDateTime();
			const timeRegex = /\d{2}:\d{2}/;
			expect(timeRegex.test(result)).toBe(true);
		});

		test('Should return date in DD.MM.YYYY format', () => {
			const result = getCurrentDateTime();
			const dateRegex = /\d{2}\.\d{2}\.\d{4}/;
			expect(dateRegex.test(result)).toBe(true);
		});

		test('Should return string with length of 18 characters', () => {
			const result = getCurrentDateTime();
			expect(result.length).toBe(18);
		});
	});

	describe('Returned values accuracy', () => {
		test('Should return current time', () => {
			const result = getCurrentDateTime();
			const now = new Date();
			const hours = now.getHours().toString().padStart(2, '0');
			const minutes = now.getMinutes().toString().padStart(2, '0');
			const expectedTime = `${hours}:${minutes}`;
			expect(result.includes(expectedTime)).toBe(true);
		});

		test('Should return current date', () => {
			const result = getCurrentDateTime();
			const now = new Date();
			const day = now.getDate().toString().padStart(2, '0');
			const month = (now.getMonth() + 1).toString().padStart(2, '0');
			const year = now.getFullYear();
			const expectedDate = `${day}.${month}.${year}`;
			expect(result.includes(expectedDate)).toBe(true);
		});

		test('Should return date and time with separators', () => {
			const result = getCurrentDateTime();
			const separators = ['/', '.'];
			let hasSeparators = true;
			separators.forEach(separator => {
				if (!result.includes(separator)) {
					hasSeparators = false;
				}
			});
			expect(hasSeparators).toBe(true);
		});
	});
});
