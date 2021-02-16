/* eslint-disable @typescript-eslint/no-var-requires */
import typescript from '@rollup/plugin-typescript';
import globby from 'globby';
import path from 'path';

export default globby
	.sync('packages/*', { onlyDirectories: true })
	.map((packagePath) => {
		const pkg = require(path.resolve(packagePath, 'package.json'));

		return {
			input: [path.resolve(packagePath, 'index.ts')],
			output: [
				{
					format: 'esm',
					sourcemap: true,
					file: path.resolve(packagePath, pkg.module),
				},
				{
					format: 'cjs',
					sourcemap: true,
					file: path.resolve(packagePath, pkg.main),
				},
			],
			plugins: [typescript()],
			external: ['@emotion/react', '@emotion/react/jsx-runtime', 'react'],
		};
	});
