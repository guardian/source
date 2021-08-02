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
	<ThemeProvider theme={userFeedbackDefault}>
		<InlineSuccess {...args}>Your voucher code is valid</InlineSuccess>
	</ThemeProvider>
);

export const successLight = (args: UserFeedbackProps) => (
	<ThemeProvider theme={userFeedbackDefault}>
		<InlineSuccess {...args}>Your voucher code is valid</InlineSuccess>
	</ThemeProvider>
);

successLight.story = {
	name: `Inline success default`,
	parameters: {
		backgrounds: {
			default: 'default',
			values: [storybookBackgrounds.default],
		},
	},
};

export const successBlue = (args: UserFeedbackProps) => (
	<ThemeProvider theme={userFeedbackBrand}>
		<InlineSuccess {...args}>Your voucher code is valid</InlineSuccess>
	</ThemeProvider>
);

successBlue.story = {
	name: `Inline success brand`,
	parameters: {
		backgrounds: {
			default: 'brand',
			values: [storybookBackgrounds.brand],
		},
	},
};
