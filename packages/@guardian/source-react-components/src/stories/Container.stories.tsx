import { Container } from '../../../src-layout/Container/Container';

export default {
	title: 'Source v4/source-react-components/Container',
	component: Container,
	argTypes: {
		border: {
			control: {
				disable: true,
			},
		},
	},
	args: {
		sideBorders: false,
		topBorder: false,
	},
};

export * from '../../../src-layout/Container/Container.stories';
