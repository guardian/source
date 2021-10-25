import { viewport } from './preview/viewport';
import { backgrounds } from './preview/backgrounds';
import { FocusManagerDecorator } from './preview/FocusManagerDecorator';
import { ThemeProviderDecorator } from './preview/ThemeProviderDecorator';

export const parameters = {
	viewport,
	backgrounds,
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	options: {
		storySort: {
			order: ['Docs', 'Source', 'Editorial'],
			method: 'alphabetical',
		},
	},
};

export const decorators = [FocusManagerDecorator, ThemeProviderDecorator];
