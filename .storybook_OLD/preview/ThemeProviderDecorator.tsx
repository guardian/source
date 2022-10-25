import { ThemeProvider } from '@emotion/react';

export const ThemeProviderDecorator = (storyFn, context) => {
	const theme = context.parameters.theme;
	return theme ? (
		<ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
	) : (
		<>{storyFn()}</>
	);
};
