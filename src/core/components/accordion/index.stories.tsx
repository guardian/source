import { Accordion, AccordionProps, AccordionRow } from './index';

export default {
	title: 'Accordion',
	component: Accordion,
	subcomponents: { AccordionRow },
};

export const Default = (args: AccordionProps) => (
	<Accordion {...args}>
		<AccordionRow label="Collecting from multiple newsagents">
			Present your card to a newsagent each time you collect the paper.
			The newsagent will scan your card and will be reimbursed for each
			transaction automatically.
		</AccordionRow>
		<AccordionRow
			label="Delivery from your retailer"
			hideToggleLabel={false}
		>
			Simply give your preferred store / retailer the barcode printed on
			your subscription letter.
		</AccordionRow>
	</Accordion>
);

Default.args = {
	hideToggleLabel: false,
};

Default.story = { name: 'default' };
