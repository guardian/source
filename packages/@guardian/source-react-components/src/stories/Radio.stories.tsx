import { Radio } from '../../../src-radio/Radio';

export default {
	title: 'Source v4/source-react-components/Radio',
	component: Radio,
	argTypes: {
		label: {
			control: {
				type: 'text',
			},
		},
		supporting: {
			control: {
				type: 'text',
			},
		},
		cssOverrides: {
			control: null,
		},
	},
	args: {
		label: 'Red',
		value: 'red',
		supporting: '',
		checked: true,
	},
};

export * from '../../../src-radio/Radio.stories';
