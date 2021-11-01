import { Option } from '../../../src-select/Option';
import { Select } from '../../../src-select/Select';

export default {
	title: 'Source v4/source-react-components/Select',
	component: Select,
	subcomponents: { Option },
	argTypes: {
		error: {
			options: ['undefined', 'error'],
			mapping: {
				undefined: undefined,
				error: 'Please select your home state. This service is unavailable outside of the US.',
			},
			control: { type: 'radio' },
		},
		success: {
			options: ['undefined', 'success'],
			mapping: {
				undefined: undefined,
				success: 'This service is available in your state',
			},
			control: { type: 'radio' },
		},
	},
	args: {
		label: 'State',
		optional: false,
		hideLabel: false,
		supporting: '',
		error: '',
		success: '',
	},
};

export * from '../../../src-select/Select.stories';
