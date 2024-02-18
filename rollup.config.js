import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
	input: 'src/index.js', // путь к вашему исходному файлу
	output: [
		{
			file: 'dist/index.cjs.js', // CommonJS-совместимая версия
			format: 'cjs',
		},
		{
			file: 'dist/index.mjs', // ESM-совместимая версия
			format: 'esm',
		},
	],
	plugins: [
		resolve(), // разрешает импорты из node_modules
		commonjs(), // преобразует модули CommonJS в ES6
	],
};
