module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	rules: {
        '@typescript-eslint/no-explicit-any': 'off', // Отключение проверки any
    },
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			files: ['src/**/*.{js,jsx,ts,tsx}'], // Проверять только файлы в папке src
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
			rules: {
				'vue/multi-word-component-names': 0,
				semi: ['error', 'always', { omitLastInOneLineBlock: true }],
				quotes: ['error', 'single', { allowTemplateLiterals: true }],
				'no-trailing-spaces': ['error'],
				'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
				'eol-last': ['error', 'always'],
			},
		},
	],
	plugins: ['es6', '@typescript-eslint'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
};
