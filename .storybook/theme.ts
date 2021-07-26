import { create } from '@storybook/theming';

import {
	background,
	brandBackground,
	brandAltBackground,
	text,
} from '../src/core/foundations/src';
import {
	headline,
	body,
	textSans,
} from '../src/core/foundations/src/typography/obj';

export const theme = create({
	base: 'light',
	brandTitle: '@guardian/source',
	brandUrl: 'https://www.npmjs.com/package/@guardian/source',
	brandImage:
		'https://raw.githubusercontent.com/guardian/source/main/assets/logo.png',
});
