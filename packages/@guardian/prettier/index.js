module.exports = {
	arrowParens: 'always',
	bracketSpacing: true,
	bracketSameLine: false,
	jsxSingleQuote: false,
	printWidth: 80,
	quoteProps: 'as-needed',
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	useTabs: true,
	overrides: [
		{
			// align with .editorconfig
			files: '*.md',
			options: {
				tabWidth: 4,
				useTabs: false,
			},
		},
		{
			// align with .editorconfig
			files: '*.json',
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
};
