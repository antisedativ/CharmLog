module.exports = {
	testEnvironment: 'node',
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
	moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
	transform: {
		'^.+\\.[jt]sx?$': 'babel-jest',
	},
	coverageReporters: ['json', 'lcov', 'text', 'clover'],
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}',
		'!src/**/*.d.ts',
		'!src/index.js', // Exclude entry point or files that you don't want to cover
	],
};
