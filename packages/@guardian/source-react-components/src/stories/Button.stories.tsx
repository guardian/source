import { SvgCross } from '@guardian/src-icons';
import { Button } from '../../../src-button/Button';

export default {
	title: 'Source v4/source-react-components/Button',
	component: Button,
	argTypes: {
		icon: {
			options: ['undefined', 'cross'],
			mapping: {
				undefined: undefined,
				cross: <SvgCross />,
			},
			control: { type: 'radio' },
		},
	},
	args: {
		children: 'Button',
		size: 'default',
		hideLabel: false,
		icon: undefined,
		priority: 'primary',
		iconSide: 'left',
		nudgeIcon: false,
	},
};

export * from '../../../src-button/Button.stories';
