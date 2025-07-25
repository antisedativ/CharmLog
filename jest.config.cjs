module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
	moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		'^.+\\.jsx?$': 'babel-jest',
	},
	moduleNameMapper: {
		'^@src/(.*)$': '<rootDir>/src/$1',
		'^@utils/(.*)$': '<rootDir>/src/utils/$1',
	},
	coverageReporters: ['json', 'lcov', 'text', 'clover'],
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}',
		'!src/**/*.d.ts',
		'!src/index.ts', // Exclude entry point or files that you don't want to cover
	],
};
