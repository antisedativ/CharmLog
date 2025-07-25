import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/index.ts',
	output: [
		{
			file: 'dist/index.cjs', // CommonJS version
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: 'dist/index.mjs', // ESM version
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		resolve(),
		commonjs(), // CommonJS -> ES6
		typescript({
			tsconfig: './tsconfig.json',
			declaration: true,
			declarationDir: './dist',
		}),
	],
};
