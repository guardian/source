import {
	userFeedbackDefault,
	userFeedbackBrand,
} from '@guardian/src-foundations/themes';
import { storybookBackgrounds } from '@guardian/src-helpers';
import { InlineError } from './index';
import { UserFeedbackProps } from './types';
import type { Story } from '../../../@types/storybook-emotion-10-fixes';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';

export default {
	title: 'Source/src-user-feedback/InlineError',
	component: InlineError,
};

const Template: Story<UserFeedbackProps> = ({
	children,
	...args
}: UserFeedbackProps) => (
	<InlineError {...args}>{children ?? 'Please enter your name'}</InlineError>
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const InlineErrorDefault = Template.bind({});
InlineErrorDefault.parameters = {
	backgrounds: {
		default: 'default',
		values: [storybookBackgrounds.default],
	},
	theme: userFeedbackDefault,
};
asChromaticStory(InlineErrorDefault);

// *****************************************************************************

export const InlineErrorBrand = Template.bind({});
InlineErrorBrand.parameters = {
	backgrounds: {
		default: 'brand',
		values: [storybookBackgrounds.brand],
	},
	theme: userFeedbackBrand,
};
asChromaticStory(InlineErrorBrand);

// *****************************************************************************

export const LongInlineErrorLightMobile = Template.bind({});
LongInlineErrorLightMobile.parameters = {
	viewport: { defaultViewport: 'mobileMedium' },
};
LongInlineErrorLightMobile.args = {
	children: 'Please pick a date in the future, but not a leap year',
};

asChromaticStory(LongInlineErrorLightMobile);

// *****************************************************************************
