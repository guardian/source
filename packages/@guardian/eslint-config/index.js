module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',

		// this works for all possible configs in v8
		// https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21
		'plugin:prettier/recommended',
	],
	plugins: ['eslint-comments'],
	rules: {
		// prevent dangling returns without braces
		curly: ['error', 'multi-line'],

		// require a `eslint-enable` comment for every `eslint-disable` comment
		'eslint-comments/disable-enable-pair': [2, { allowWholeFile: true }],

		// disallow duplicate `eslint-disable` comments
		'eslint-comments/no-duplicate-disable': 2,

		// disallow unused eslint-en/disable comments
		// (make sure they're not left in after a fix)
		'eslint-comments/no-unused-disable': 2,
		'eslint-comments/no-unused-enable': 2,

		// require an explanation if you disable eslint
		'eslint-comments/require-description': [
			2,
			{ ignore: ['eslint-enable'] },
		],

		// this doesn't catch bugs or make things more readable
		// and sometimes tools or 3rd parties require it
		'no-underscore-dangle': 0,

		// encourages consistent token use across code bases
		// (you have to deliberately rename an import) and
		// makes the location of errors easier to discover:
		// https://twitter.com/addyosmani/status/1411233253948747777
		'import/no-default-export': 2,
		'import/prefer-default-export': 0,

		// less diff noise (they're hoisted anyway)
		'import/first': 2,

		// fixable import formatting, designed to minimise diff noise
		'sort-imports': [
			'error',
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
			},
		],
		'import/newline-after-import': 2,
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'object',
					'unknown',
				],
				'newlines-between': 'never',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],

		// prevent circular dependencies
		'import/no-cycle': 2,
	},
};
