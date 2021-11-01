import { SvgExternal } from '@guardian/src-icons';
import { Link } from '../../../src-link/Link';

export default {
	title: 'Source v4/source-react-components/Link',
	component: Link,
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

export * from '../../../src-link/Link.stories';
