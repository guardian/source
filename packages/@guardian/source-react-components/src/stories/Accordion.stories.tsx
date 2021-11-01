import { Accordion } from '../../../src-accordion/Accordion';
import { AccordionRow } from '../../../src-accordion/AccordionRow';

export default {
	title: 'Source v4/source-react-components/Accordion',
	component: Accordion,
	subcomponents: { AccordionRow },
	args: {
		hideToggleLabel: false,
	},
};

export * from '../../../src-accordion/Accordion.stories';
