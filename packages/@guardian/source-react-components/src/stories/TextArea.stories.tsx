import { TextArea } from '../../../src-text-area/TextArea';

export default {
	title: 'Source v4/source-react-components/TextArea',
	component: TextArea,
	argTypes: {
		error: {
			options: ['undefined', 'error'],
			mapping: {
				undefined: undefined,
				error: 'Please tell us your views',
			},
			control: { type: 'radio' },
		},
	},
	args: {
		label: 'Comments',
		optional: false,
		hideLabel: false,
		supporting: '',
		error: undefined,
	},
};

export * from '../../../src-text-area/TextArea.stories';
