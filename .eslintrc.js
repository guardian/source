module.exports = {
	root: true,
	env: {
		jest: true,
		browser: true,
		node: true,
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		ecmaFeatures: {
			modules: true,
		},
		project: './tsconfig.json',
	},
	plugins: ['react', 'jsx-a11y'],
	extends: [
		'@guardian/eslint-config',
		'plugin:react/recommended',
		'plugin:jsx-a11y/strict',
	],
	rules: {
		'jsx-a11y/label-has-for': 'off',
		'react/react-in-jsx-scope': 'off',
	},
	settings: {
		'import/resolver': {
			typescript: {},
		},
		react: {
			version: 'detect',
		},
	},
	ignorePatterns: ['dist', 'coverage'],
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
			extends: ['@guardian/eslint-config-typescript'],
			rules: {
				'@typescript-eslint/no-unused-vars': 'error',
			},
		},
		{
			files: ['**/*.stories.tsx'],
			rules: {
				// storybook require this
				'import/no-default-export': 'off',
			},
		},
		{
			// these are only internal files, so we don't need to check them so
			// rigorously they often use things like JSON which are `any`s too,
			// we can be more lenient
			files: ['scripts/**/*', 'lib/**/*'],
			rules: {
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off',
				'@typescript-eslint/explicit-module-boundary-types': 'off',
			},
		},
		{
			files: ['**/*.test.ts', '**/*.test.tsx'],
			rules: {
				'@typescript-eslint/restrict-template-expressions': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off',
			},
		},
	],
};
