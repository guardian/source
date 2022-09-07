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
			order: [
				'Source',
				'Foundations',
				'Components',
				'Development Kitchen',
				'Packages',
			],
			method: 'alphabetical',
		},
	},
};

export const decorators = [FocusManagerDecorator, ThemeProviderDecorator];

// The docs pages don't seem to respect the anchor links on load so this
// ensures they do. This may be related to the fact that window.location.hash
// isn't set on first page load, hence we're getting it from window.parent.location.hash
// Something else is also going on to affect scroll, hence the need for the timeout (sorry!)
window.addEventListener('load', () => {
	if (window.location.hash !== window.parent.location.hash) {
		setTimeout(() => (window.location.hash = window.parent.location.hash), 10);
	}
});
