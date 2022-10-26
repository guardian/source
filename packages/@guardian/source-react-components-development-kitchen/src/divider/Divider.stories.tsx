import type { Story } from '@storybook/react';
import type { DividerProps } from './Divider';
import { Divider } from './Divider';

export default {
	title: 'Packages/source-react-components-development-kitchen/Divider',
	component: Divider,
};

const Template: Story = (args: DividerProps) => (
	<span>
		<p>
			The individual responsible for one of the most significant leaks in US
			political history is Edward Snowden, a 29-year-old former technical
			assistant for the CIA and current employee of the defence contractor Booz
			Allen Hamilton. Snowden has been working at the National Security Agency
			for the last four years as an employee of various outside contractors,
			including Booz Allen and Dell.
		</p>
		<Divider {...args} />
		<p>
			The Guardian, after several days of interviews, is revealing his identity
			at his request. From the moment he decided to disclose numerous top-secret
			documents to the public, he was determined not to opt for the protection
			of anonymity. “I have no intention of hiding who I am because I know I
			have done nothing wrong,” he said.
		</p>
	</span>
);

export const DefaultDivider = Template.bind({});

// *****************************************************************************

export const TightDivider = Template.bind({});
TightDivider.args = {
	spaceAbove: 'tight',
};

// *****************************************************************************

export const FullDivider = Template.bind({});
FullDivider.args = {
	size: 'full',
};

// *****************************************************************************

export const TextDivider = Template.bind({});
TextDivider.args = {
	displayText: 'I am centred',
};
