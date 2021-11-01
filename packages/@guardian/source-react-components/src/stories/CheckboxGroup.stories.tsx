import { Checkbox } from '../../../src-checkbox/Checkbox';
import { CheckboxGroup } from '../../../src-checkbox/CheckboxGroup';

export default {
	title: 'Source v4/source-react-components/CheckboxGroup',
	component: CheckboxGroup,
	subcomponents: { Checkbox },
	argTypes: {},
	args: {
		name: 'checkbox-group',
		label: 'Checkbox group',
		supporting: '',
		hideLabel: false,
		error: undefined,
	},
};

export * from '../../../src-checkbox/CheckboxGroup.stories';
