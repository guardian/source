import { ThemeProvider } from '@emotion/react';

export const ThemeProviderDecorator = (storyFn, context) => {
	const theme = {
		// accordion: undefined,
	};
	return theme ? (
		<ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
	) : (
		<>{storyFn()}</>
	);
};
