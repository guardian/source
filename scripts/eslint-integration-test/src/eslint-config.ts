export const componentsEslintConfig = JSON.stringify({
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['plugin:@guardian/source-react-components/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
});

export const foundationsEslintConfig = JSON.stringify({
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['plugin:@guardian/source-foundations/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
});