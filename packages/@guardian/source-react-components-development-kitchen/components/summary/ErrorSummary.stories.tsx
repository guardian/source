import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
import type { ErrorSummaryProps } from './ErrorSummary';
import { ErrorSummary } from './ErrorSummary';

export default {
	title: 'Kitchen/source-react-components-development-kitchen/Error Summary',
	component: ErrorSummary,
	args: {
		error: 'There has been a problem',
		context: '',
	},
};

const Template: Story<ErrorSummaryProps> = (args: ErrorSummaryProps) => (
	<ErrorSummary {...args} />
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const ErrorOnly = Template.bind({});
ErrorOnly.args = {
	error: 'This is an example with an error message only',
};
asChromaticStory(ErrorOnly);

// *****************************************************************************

export const WithContext = Template.bind({});
WithContext.args = {
	error: 'Here is an error',
	context: 'This is some more information about this error message',
};
asChromaticStory(WithContext);
