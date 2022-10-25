import type { Story } from '@storybook/react';
import { asChromaticStory } from '../../../../../lib/story-intents';
import type { ErrorSummaryProps } from './ErrorSummary';
import { ErrorSummary } from './ErrorSummary';

export default {
	title: 'Packages/source-react-components-development-kitchen/Error Summary',
	component: ErrorSummary,
	args: {
		message: 'There has been a problem',
		context: '',
		errorReportUrl: '',
	} as ErrorSummaryProps,
};

const Template: Story<ErrorSummaryProps> = (args: ErrorSummaryProps) => (
	<ErrorSummary {...args} />
);

export const ErrorOnly = Template.bind({});
ErrorOnly.args = {
	message: 'This is an example with an error message only',
};
asChromaticStory(ErrorOnly);

// *****************************************************************************

export const ErrorOnlyAsReactNode = Template.bind({});
ErrorOnlyAsReactNode.args = {
	message: (
		<>
			This is the error message as a <s>ReactNode</s>
		</>
	),
};
asChromaticStory(ErrorOnlyAsReactNode);

// *****************************************************************************

export const WithContext = Template.bind({});
WithContext.args = {
	message: 'Here is an error',
	context: 'This is some more information about this error message',
};
asChromaticStory(WithContext);

// *****************************************************************************

export const WithContextAsReactNode = Template.bind({});
WithContextAsReactNode.args = {
	message: 'Here is an error',
	context: (
		<>
			This is the context as a <b>ReactNode</b>
		</>
	),
};
asChromaticStory(WithContextAsReactNode);

// *****************************************************************************

export const WithReportLink = Template.bind({});
WithReportLink.args = {
	message: 'Here is an error',
	context: 'This is some more information about this error message',
	errorReportUrl: 'https://www.theguardian.com/info/tech-feedback',
};
asChromaticStory(WithReportLink);
