import { SvgArrowRightStraight } from '@guardian/src-icons';
import { LinkButton } from '../../../src-button/LinkButton';

export default {
	title: 'Source v4/source-react-components/LinkButton',
	component: LinkButton,
	argTypes: {
		icon: {
			options: ['undefined', 'arrow'],
			mapping: {
				undefined: undefined,
				arrow: <SvgArrowRightStraight />,
			},
			control: { type: 'radio' },
		},
	},
	args: {
		children: 'Link Button',
		size: 'default',
		hideLabel: false,
		icon: undefined,
		priority: 'primary',
		iconSide: 'left',
		nudgeIcon: false,
	},
};

export * from '../../../src-button/LinkButton.stories';
