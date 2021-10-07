import type { Story } from '../../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../../lib/story-intents';
import type { SuccessSummaryProps } from './SuccessSummary';
import { SuccessSummary } from './SuccessSummary';

export default {
	title: 'Kitchen/source-react-components-development-kitchen/Success Summary',
	component: SuccessSummary,
	args: {
		success: 'Your request was successful',
		context: '',
	},
};

const Template: Story<SuccessSummaryProps> = (args: SuccessSummaryProps) => (
	<SuccessSummary {...args} />
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const SuccessOnly = Template.bind({});
SuccessOnly.args = {
	success: 'This is an example with a success message only',
};
asChromaticStory(SuccessOnly);

// *****************************************************************************

export const WithContext = Template.bind({});
WithContext.args = {
	success: 'It was successful',
	context: 'This is some more information about this success message',
};
asChromaticStory(WithContext);
