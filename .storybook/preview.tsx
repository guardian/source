import { viewport } from './preview/viewport';
import { backgrounds } from './preview/backgrounds';
import { FocusManagerDecorator } from './preview/FocusManagerDecorator';

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
			order: ['Source', 'Editorial'],
			method: 'alphabetical',
		},
	},
	docs: {
		source: {
			state: 'open',
		},
	},
};

export const decorators = [FocusManagerDecorator];
