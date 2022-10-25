import type { Story } from '@storybook/react';
import { asChromaticStory } from '../../../../../lib/story-intents';
import type { SuccessSummaryProps } from './SuccessSummary';
import { SuccessSummary } from './SuccessSummary';

export default {
	title: 'Packages/source-react-components-development-kitchen/Success Summary',
	component: SuccessSummary,
	args: {
		message: 'Your request was successful',
		context: '',
	},
};

const Template: Story<SuccessSummaryProps> = (args: SuccessSummaryProps) => (
	<SuccessSummary {...args} />
);

export const SuccessOnly = Template.bind({});
SuccessOnly.args = {
	message: 'This is an example with a success message only',
};
asChromaticStory(SuccessOnly);

export const SuccessOnlyAsReactNode = Template.bind({});
SuccessOnlyAsReactNode.args = {
	message: (
		<>
			This is the success message as a <s>ReactNode</s>
		</>
	),
};
asChromaticStory(SuccessOnlyAsReactNode);

// *****************************************************************************

export const WithContext = Template.bind({});
WithContext.args = {
	message: 'It was successful',
	context: 'This is some more information about this success message',
};
asChromaticStory(WithContext);

// *****************************************************************************

export const WithContextAsReactNode = Template.bind({});
WithContextAsReactNode.args = {
	message: 'It was successful',
	context: (
		<>
			This is the context as a <b>ReactNode</b>
		</>
	),
};
asChromaticStory(WithContextAsReactNode);
