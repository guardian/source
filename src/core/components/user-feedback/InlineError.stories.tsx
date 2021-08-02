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

export const InlineErrorDefault = (args: UserFeedbackProps) => (
	<ThemeProvider theme={userFeedbackDefault}>
		<InlineError {...args}>Please enter your name</InlineError>
	</ThemeProvider>
);

InlineErrorDefault.story = {
	parameters: {
		backgrounds: {
			default: 'default',
			values: [storybookBackgrounds.default],
		},
	},
};

export const InlineErrorBrand = (args: UserFeedbackProps) => (
	<ThemeProvider theme={userFeedbackBrand}>
		<InlineError {...args}>Please enter your name</InlineError>
	</ThemeProvider>
);

InlineErrorBrand.story = {
	parameters: {
		backgrounds: {
			default: 'brand',
			values: [storybookBackgrounds.brand],
		},
	},
};

export const LongInlineErrorLightMobile = (args: UserFeedbackProps) => (
	<InlineError {...args}>
		Please pick a date in the future, but not a leap year
	</InlineError>
);

LongInlineErrorLightMobile.story = {
	parameters: {
		viewport: { defaultViewport: 'mobileMedium' },
	},
};
