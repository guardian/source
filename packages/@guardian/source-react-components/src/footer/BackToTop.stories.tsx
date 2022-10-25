import type { Story } from '@storybook/react';
import { asChromaticStory } from '../../../../../lib/story-intents';
import { BackToTop } from './BackToTop';

export default {
	component: BackToTop,
	title: 'Packages/source-react-components/BackToTop',
};

const Template: Story = () => BackToTop;

export const Default = Template.bind({});
asChromaticStory(Default);
