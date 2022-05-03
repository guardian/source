module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'es2020',
		project: './tsconfig.json',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'@guardian/eslint-config',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:import/typescript',
	],
	settings: {
		'import/extensions': ['.ts', '.tsx'],
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				// always try to resolve types under `<root>@types` directory even it doesn't contain any source code
				alwaysTryTypes: true,
			},
		},
	},
	rules: {
		/*
		FIXABLE STYLISTIC CHOICES THAT DIFFER FROM THE DEFAULT
		The intention is to maximise clarity and consistency,
		not direct or inhibit what can be done with code.
		*/

		// use `string[]` for simple arrays, `Array<string>` for complex ones
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md#array-simple
		'@typescript-eslint/array-type': [
			2,
			{
				default: 'array-simple',
			},
		],

		// use `Record<string, unknown>` instead of `{ [key: string]: unknown }`
		'@typescript-eslint/consistent-indexed-object-style': [2, 'record'],

		// be explicit when you only want to import a type:
		// `import type { Foo } from 'Foo';`
		'@typescript-eslint/consistent-type-imports': [
			2,
			{
				prefer: 'type-imports',
			},
		],

		// delimit members with semi-colons and require
		// one at the end to keep diffs simpler
		'@typescript-eslint/member-delimiter-style': [
			2,
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true,
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false,
				},
			},
		],

		// use `(1 + foo.num!) == 2` instead of `1 + foo.num! == 2`
		'@typescript-eslint/no-confusing-non-null-assertion': 2,

		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
		'@typescript-eslint/no-unnecessary-condition': 2,
		'@typescript-eslint/no-unnecessary-qualifier': 2,
		'@typescript-eslint/no-unnecessary-type-arguments': 2,

		// use `str.includes(value)` instead of `str.indexOf(value) !== -1`
		'@typescript-eslint/prefer-includes': 2,

		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
		'@typescript-eslint/prefer-reduce-type-parameter': 2,

		// use String#startsWith or String#endsWith instead of String#indexOf et al
		'@typescript-eslint/prefer-string-starts-ends-with': 2,

		// use `@ts-expect-error` instead of `@ts-ignore`
		'@typescript-eslint/prefer-ts-expect-error': 2,

		/*
		NOT FIXABLE BUT USEFUL
		*/

		// Enforce TypeScript naming conventions
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
		'@typescript-eslint/naming-convention': [
			2,

			// types are 'PascalCase'
			{
				selector: ['typeLike', 'enumMember'],
				format: ['PascalCase'],
			},

			// booleans are descriptive
			// {
			// 	selector: 'variable',
			// 	types: ['boolean'],
			// 	format: ['PascalCase'],
			// 	prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
			// },
		],

		// use `foo ?? 'a string'` instead of `foo !== null && foo !== undefined ? foo : 'a string'`
		'@typescript-eslint/prefer-nullish-coalescing': 2,

		// use `a?.b` instead of `a && a.b`
		'@typescript-eslint/prefer-optional-chain': 2,

		// requires any function or method that returns a Promise to be marked async
		// '@typescript-eslint/promise-function-async': 2,
	},
};
