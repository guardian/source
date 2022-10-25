import { ThemeProviderDecorator } from './preview/ThemeProviderDecorator';
import { FocusManagerDecorator } from './preview/FocusManagerDecorator';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [FocusManagerDecorator, ThemeProviderDecorator];
