import type { Story } from '@storybook/react';
import type { AccordionProps } from './Accordion';
import { Accordion } from './Accordion';
import { AccordionRow } from './AccordionRow';

export default {
	title: 'Packages/source-react-components/Accordion',
	component: Accordion,
	subcomponents: { AccordionRow },
	args: {
		hideToggleLabel: false,
	},
};

const Template: Story<AccordionProps> = (args: AccordionProps) => (
	<Accordion {...args}>
		<AccordionRow label="Collecting from multiple newsagents">
			Present your card to a newsagent each time you collect the paper. The
			newsagent will scan your card and will be reimbursed for each transaction
			automatically.
		</AccordionRow>
		<AccordionRow label="Delivery from your retailer">
			Simply give your preferred store / retailer the barcode printed on your
			subscription letter.
		</AccordionRow>
	</Accordion>
);

export const WithCTALabelsDefaultTheme = Template.bind({});

// *****************************************************************************

export const WithoutCTALabelsDefaultTheme = Template.bind({});
WithoutCTALabelsDefaultTheme.args = {
	hideToggleLabel: true,
};
