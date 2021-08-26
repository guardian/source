import { Accordion, AccordionProps, AccordionRow } from './index';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';
import type { Story } from '../../../@types/storybook-emotion-10-fixes';

export default {
	title: 'Source/src-accordion/Accordion',
	component: Accordion,
	subcomponents: { AccordionRow },
	args: {
		hideToggleLabel: false,
	},
};

const Template: Story<AccordionProps> = (args: AccordionProps) => (
	<Accordion {...args}>
		<AccordionRow label="Collecting from multiple newsagents">
			Present your card to a newsagent each time you collect the paper.
			The newsagent will scan your card and will be reimbursed for each
			transaction automatically.
		</AccordionRow>
		<AccordionRow label="Delivery from your retailer">
			Simply give your preferred store / retailer the barcode printed on
			your subscription letter.
		</AccordionRow>
	</Accordion>
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const WithCTALabels = Template.bind({});
asChromaticStory(WithCTALabels);

// *****************************************************************************

export const WithoutCTALabels = Template.bind({});
WithoutCTALabels.args = {
	hideToggleLabel: true,
};
asChromaticStory(WithoutCTALabels);
