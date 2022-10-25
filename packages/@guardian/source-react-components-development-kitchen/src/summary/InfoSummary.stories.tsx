import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import { asChromaticStory } from '../../../../../lib/story-intents';
import type { InfoSummaryProps } from './InfoSummary';
import { InfoSummary } from './InfoSummary';

export default {
	title: 'Packages/source-react-components-development-kitchen/Info Summary',
	component: InfoSummary,
	args: {
		message: 'Here is some information',
		context: '',
	},
};

const Template: Story<InfoSummaryProps> = (args: InfoSummaryProps) => (
	<InfoSummary {...args} />
);

export const InfoOnly = Template.bind({});
InfoOnly.args = {
	message: 'This is an example with a info message only',
};
asChromaticStory(InfoOnly);

// *****************************************************************************

export const InfoOnlyAsReactNode = Template.bind({});
InfoOnlyAsReactNode.args = {
	message: (
		<>
			This is the info message as a <s>ReactNode</s>
		</>
	),
};
asChromaticStory(InfoOnlyAsReactNode);

// *****************************************************************************

export const WithContext = Template.bind({});
WithContext.args = {
	message: 'It was insightful',
	context: 'This is some more information about this info message',
};
asChromaticStory(WithContext);

// *****************************************************************************

export const WithContextAsReactNode = Template.bind({});
WithContextAsReactNode.args = {
	message: 'It was insightful',
	context: (
		<>
			This is the context as a <b>ReactNode</b>
		</>
	),
};
asChromaticStory(WithContextAsReactNode);
