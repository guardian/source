import { ThemeProvider } from '@emotion/react';
import {
	userFeedbackDefault,
	userFeedbackBrand,
} from '@guardian/src-foundations/themes';
import { storybookBackgrounds } from '@guardian/src-helpers';
import { InlineSuccess } from './index';
import { UserFeedbackProps } from './types';

export default {
	title: 'Source/src-user-feedback/InlineSuccess',
	component: InlineSuccess,
};

export const Demo = (args: UserFeedbackProps) => (
	<InlineSuccess {...args}>Your voucher code is valid</InlineSuccess>
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

export const successLight = (_: UserFeedbackProps) => (
	<ThemeProvider theme={userFeedbackDefault}>
		<InlineSuccess>Your voucher code is valid</InlineSuccess>
	</ThemeProvider>
);

successLight.story = {
	name: `Inline success default`,
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

export const successBlue = (_: UserFeedbackProps) => (
	<ThemeProvider theme={userFeedbackBrand}>
		<InlineSuccess>Your voucher code is valid</InlineSuccess>
	</ThemeProvider>
);

successBlue.story = {
	name: `Inline success brand`,
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
