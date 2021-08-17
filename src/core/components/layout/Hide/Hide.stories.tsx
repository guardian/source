import { Hide, HideProps } from './Hide';
import { asChromaticStory, asPlayground } from '../../../../lib/story-intents';
import { Story } from '../../../../@types/storybook-emotion-10-fixes';

export default {
	title: 'Source/src-layout/Hide',
	component: Hide,
	argTypes: {
		above: {
			control: { disable: true },
		},
		below: {
			control: { disable: true },
		},
	},
};

const Template: Story = (args: HideProps) => (
	<Hide {...args}>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliud igitur
		esse censet gaudere, aliud non dolere. Quid turpius quam sapientis vitam
		ex insipientium sermone pendere? Nam illud quidem adduci vix possum, ut
		ea, quae senserit ille, tibi non vera videantur. At iam decimum annum in
		spelunca iacet.
	</Hide>
);

// *****************************************************************************

export const Demo = Template.bind({});
asPlayground(Demo);

// *****************************************************************************

export const HiddenFromTabletAtMobile = Template.bind({});
HiddenFromTabletAtMobile.args = {
	from: 'tablet',
};
HiddenFromTabletAtMobile.parameters = {
	viewport: { defaultViewport: 'mobile' },
};
asChromaticStory(HiddenFromTabletAtMobile);

// *****************************************************************************

export const HiddenFromTabletAtTablet = Template.bind({});
HiddenFromTabletAtTablet.args = {
	from: 'tablet',
};
HiddenFromTabletAtTablet.parameters = {
	viewport: { defaultViewport: 'tablet' },
};
asChromaticStory(HiddenFromTabletAtTablet);

// *****************************************************************************

export const HiddenUntilTabletAtMobile = Template.bind({});
HiddenUntilTabletAtMobile.args = {
	until: 'tablet',
};
HiddenUntilTabletAtMobile.parameters = {
	viewport: { defaultViewport: 'mobile' },
};
asChromaticStory(HiddenUntilTabletAtMobile);

// *****************************************************************************

export const HiddenUntilTabletAtTablet = Template.bind({});
HiddenUntilTabletAtTablet.args = {
	until: 'tablet',
};
HiddenUntilTabletAtTablet.parameters = {
	viewport: { defaultViewport: 'tablet' },
};
asChromaticStory(HiddenUntilTabletAtTablet);
