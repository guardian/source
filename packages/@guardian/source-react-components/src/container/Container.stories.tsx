import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
import type { ContainerProps } from './Container';
import { Container } from './Container';

export default {
	title: 'Packages/source-react-components/Container',
	component: Container,
	argTypes: {
		border: {
			control: {
				disable: true,
			},
		},
	},
	args: {
		sideBorders: false,
		topBorder: false,
	},
};

const Template: Story = (args: ContainerProps) => (
	<Container {...args}>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliud igitur esse
		censet gaudere, aliud non dolere. Quid turpius quam sapientis vitam ex
		insipientium sermone pendere? Nam illud quidem adduci vix possum, ut ea,
		quae senserit ille, tibi non vera videantur. At iam decimum annum in
		spelunca iacet.
	</Container>
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const Default = Template.bind({});
asChromaticStory(Default);

// *****************************************************************************

export const WithSideBorders = Template.bind({});
WithSideBorders.args = {
	sideBorders: true,
};
asChromaticStory(WithSideBorders);

// *****************************************************************************

export const WithTopBorder = Template.bind({});
WithTopBorder.args = {
	topBorder: true,
};
asChromaticStory(WithTopBorder);

// *****************************************************************************

export const WithBorderColour = Template.bind({});
WithBorderColour.args = {
	sideBorders: true,
	topBorder: true,
	borderColor: 'red',
};
asChromaticStory(WithBorderColour);

// *****************************************************************************

export const WithBackgroundColour = Template.bind({});
WithBackgroundColour.args = {
	backgroundColor: 'red',
};
asChromaticStory(WithBackgroundColour);

// *****************************************************************************

export const WithAsideElement = Template.bind({});
WithAsideElement.args = {
	element: 'aside',
};
asChromaticStory(WithAsideElement);

// *****************************************************************************
