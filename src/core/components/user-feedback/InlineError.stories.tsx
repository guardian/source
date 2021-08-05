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

Demo.story = {
	argTypes: {
		className: {
			control: null,
		},
		cssOverrides: {
			control: null,
		},
	},
	parameters: {
		controls: {
			hideNoControlsWarning: true,
		},
	},
};

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
		controls: {
			disabled: true,
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
		controls: {
			disabled: true,
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
		controls: {
			disabled: true,
		},
		viewport: { defaultViewport: 'mobileMedium' },
	},
};
