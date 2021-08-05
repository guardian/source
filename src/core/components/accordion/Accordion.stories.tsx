import { Accordion, AccordionProps, AccordionRow } from './index';

export default {
	title: 'Source/src-accordion/Accordion',
	component: Accordion,
	subcomponents: { AccordionRow },
};

export const Demo = (args: AccordionProps) => (
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

Demo.story = {
	args: {
		hideToggleLabel: false,
	},
	argTypes: {
		className: {
			control: null,
		},
		cssOverrides: {
			control: null,
		},
	},
};

export const WithCTALabels = (_: AccordionProps) => (
	<Accordion hideToggleLabel={false}>
		<AccordionRow label="Lorem ipsum dolor sit amet" />
		<AccordionRow label="Consectetur adipiscing elit" />
	</Accordion>
);

WithCTALabels.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};

export const WithoutCTALabels = (_: AccordionProps) => (
	<Accordion hideToggleLabel={true}>
		<AccordionRow label="Lorem ipsum dolor sit amet" />
		<AccordionRow label="Consectetur adipiscing elit" />
	</Accordion>
);

WithoutCTALabels.story = {
	parameters: {
		controls: {
			disabled: true,
		},
	},
};
