import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
	input: 'src/index.js',
	output: [
		{
			file: 'dist/index.cjs', // CommonJS version
			format: 'cjs',
		},
		{
			file: 'dist/index.mjs', // ESM version
			format: 'esm',
		},
	],
	plugins: [
		resolve(),
		commonjs(), // CommonJS -> ES6
	],
};
