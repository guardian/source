import {
	userFeedbackDefault,
	userFeedbackBrand,
} from '@guardian/src-foundations/themes';
import { storybookBackgrounds } from '@guardian/src-helpers';
import { InlineSuccess } from './index';
import { UserFeedbackProps } from './types';
import type { Story } from '../../../@types/storybook-emotion-10-fixes';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';

export default {
	title: 'Source/src-user-feedback/InlineSuccess',
	component: InlineSuccess,
};

const Template: Story<UserFeedbackProps> = (args: UserFeedbackProps) => (
	<InlineSuccess {...args}>Your voucher code is valid</InlineSuccess>
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const InlineSuccessLight = Template.bind({});
InlineSuccessLight.parameters = {
	backgrounds: {
		default: 'default',
		values: [storybookBackgrounds.default],
	},
	theme: userFeedbackDefault,
};
asChromaticStory(InlineSuccessLight);

// *****************************************************************************

export const InlineSuccessBrand = Template.bind({});
InlineSuccessBrand.parameters = {
	backgrounds: {
		default: 'brand',
		values: [storybookBackgrounds.brand],
	},
	theme: userFeedbackBrand,
};
asChromaticStory(InlineSuccessBrand);
