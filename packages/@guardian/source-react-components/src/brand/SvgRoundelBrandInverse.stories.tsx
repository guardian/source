import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import { asChromaticStory } from '../../../../../lib/story-intents';
import type { SvgRoundelBrandInverseProps } from './SvgRoundelBrandInverse';
import { SvgRoundelBrandInverse } from './SvgRoundelBrandInverse';

export default {
	title: 'Packages/source-react-components/SvgRoundelBrandInverse',
	component: SvgRoundelBrandInverse,
	argTypes: {
		width: {
			control: { type: 'range', min: 10, max: 600 },
		},
	},
};

const Template: Story = (args: SvgRoundelBrandInverseProps) => (
	<SvgRoundelBrandInverse {...args} />
);

export const Default = Template.bind({});
asChromaticStory(Default);
