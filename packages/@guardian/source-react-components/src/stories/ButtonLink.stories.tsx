import { SvgExternal } from '@guardian/src-icons';
import { ButtonLink } from '../../../src-link/ButtonLink';

export default {
	title: 'Source v4/source-react-components/ButtonLink',
	component: ButtonLink,
	args: {
		priority: 'primary',
		subdued: false,
		icon: <SvgExternal />,
		iconSide: 'left',
	},
	argTypes: {
		icon: {
			options: ['undefined', 'SvgExternal'],
			mapping: {
				undefined: undefined,
				SvgExternal: <SvgExternal />,
			},
			control: { type: 'radio' },
		},
	},
};

export * from '../../../src-link/ButtonLink.stories';
