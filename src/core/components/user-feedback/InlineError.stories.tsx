import { ThemeProvider } from '@emotion/react';
import {
	userFeedbackDefault,
	userFeedbackBrand,
} from '@guardian/src-foundations/themes';
import { storybookBackgrounds } from '@guardian/src-helpers';
import { InlineError } from './index';
import { UserFeedbackProps } from './types';

export default {
	title: 'Source/src-user-feedback/InlineError',
	component: InlineError,
};

export const Demo = (args: UserFeedbackProps) => (
	<ThemeProvider theme={userFeedbackDefault}>
		<InlineError {...args}>Please enter your name</InlineError>
	</ThemeProvider>
);

export const errorLight = (args: UserFeedbackProps) => (
	<ThemeProvider theme={userFeedbackDefault}>
		<InlineError {...args}>Please enter your name</InlineError>
	</ThemeProvider>
);

errorLight.story = {
	name: `Inline error default`,
	parameters: {
		backgrounds: {
			default: 'default',
			values: [storybookBackgrounds.default],
		},
	},
};

export const errorBlue = (args: UserFeedbackProps) => (
	<ThemeProvider theme={userFeedbackBrand}>
		<InlineError {...args}>Please enter your name</InlineError>
	</ThemeProvider>
);

errorBlue.story = {
	name: `Inline error brand`,
	parameters: {
		backgrounds: {
			default: 'brand',
			values: [storybookBackgrounds.brand],
		},
	},
};

export const errorLongLightMobile = (args: UserFeedbackProps) => (
	<InlineError {...args}>
		Please pick a date in the future, but not a leap year
	</InlineError>
);

errorLongLightMobile.story = {
	name: `Long inline error light mobile`,
	parameters: {
		viewport: { defaultViewport: 'mobileMedium' },
	},
};
