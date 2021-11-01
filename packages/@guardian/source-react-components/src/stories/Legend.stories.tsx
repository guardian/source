import { Legend } from '../../../src-label/Legend';

export default {
	title: 'Source v4/source-react-components/Legend',
	args: {
		text: 'Email',
		supporting: 'undefined',
		optional: false,
		hideLabel: false,
	},
	argTypes: {
		supporting: {
			options: ['undefined', 'text', 'component'],
			mapping: {
				undefined: undefined,
				text: 'alex@example.com',
				component: (
					<span role="img" aria-label="Image of a letter">
						💌
					</span>
				),
			},
			control: { type: 'radio' },
		},
	},
	component: Legend,
};

export * from '../../../src-label/Legend.stories';
