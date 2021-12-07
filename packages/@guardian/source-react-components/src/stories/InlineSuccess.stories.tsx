import { userFeedbackBrand } from '@guardian/src-foundations/themes';
import { storybookBackgrounds } from '@guardian/src-helpers';
import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
import { InlineSuccess } from '../../../src-user-feedback/index';
import type { UserFeedbackProps } from '../../../src-user-feedback/types';

export default {
	title: 'Packages/source-react-components/InlineSuccess',
	component: InlineSuccess,
};

const Template: Story<UserFeedbackProps> = (args: UserFeedbackProps) => (
	<InlineSuccess {...args}>Your voucher code is valid</InlineSuccess>
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const InlineSuccessDefaultTheme = Template.bind({});
asChromaticStory(InlineSuccessDefaultTheme);

// *****************************************************************************

export const InlineSuccessBrandTheme = Template.bind({});
InlineSuccessBrandTheme.parameters = {
	backgrounds: {
		default: 'brand',
		values: [storybookBackgrounds.brand],
	},
	theme: userFeedbackBrand,
};
asChromaticStory(InlineSuccessBrandTheme);
