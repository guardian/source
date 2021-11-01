import { Radio } from '../../../src-radio/Radio';
import { RadioGroup } from '../../../src-radio/RadioGroup';

export default {
	title: 'Source v4/source-react-components/RadioGroup',
	component: RadioGroup,
	subcomponents: { Radio },
	args: {
		name: 'colours',
		label: 'Select your preferred colour',
		supporting: '',
		hideLabel: false,
		orientation: 'vertical',
		error: '',
	},
	argTypes: {
		// Override the control so that users can try entering a string in the Storybook canvas
		supporting: {
			control: {
				type: 'text',
			},
		},
		id: { control: null },
		className: { control: null },
		cssOverrides: { control: null },
	},
};

export * from '../../../src-radio/RadioGroup.stories';
