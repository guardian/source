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

// Hacky way of making sure that we're on the docs page if it's available
// Polls for href changes as there's not event emitted when changing stories
// Inspired by https://github.com/storybookjs/storybook/issues/13128#issuecomment-798927176
var currentPage = window.location.href;
window.setInterval(() => {
	if (window.location.href !== currentPage) {
		currentPage = window.location.href;
		try {
			// Find all buttons containing the text Docs within the <div role="main"> tag
			const docsButtonSelector = window.parent.document.evaluate(
				"//div[@role='main']//button[contains(., 'Docs')]",
				window.parent.document,
				null,
				XPathResult.ANY_TYPE,
				null,
			);

			const button =
				docsButtonSelector.iterateNext() as HTMLButtonElement;
			button && button.click();
		} catch (error) {
			console.error(error);
		}
	}
}, 500);
