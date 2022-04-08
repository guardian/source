import type { Story } from '../../../../../lib/@types/storybook-emotion-10-fixes';
import {
	asChromaticStory,
	asPlayground,
} from '../../../../../lib/story-intents';
import type { StarRatingProps } from './StarRating';
import { StarRating } from './StarRating';

export default {
	title: 'Packages/source-react-components-development-kitchen/Star Rating',
	component: StarRating,
	args: {
		size: 'medium',
		rating: 3,
	},
};

const Template: Story<StarRatingProps> = (args: StarRatingProps) => (
	<StarRating {...args} />
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const NoStar = Template.bind({});
NoStar.args = {
	rating: 0,
};
asChromaticStory(NoStar);

// *****************************************************************************

export const OneStar = Template.bind({});
OneStar.args = {
	rating: 1,
};
asChromaticStory(OneStar);

// *****************************************************************************

export const TwoStars = Template.bind({});
TwoStars.args = {
	rating: 2,
};
asChromaticStory(TwoStars);

// *****************************************************************************

export const ThreeStars = Template.bind({});
ThreeStars.args = {
	rating: 3,
};
asChromaticStory(ThreeStars);

// *****************************************************************************

export const FourStars = Template.bind({});
FourStars.args = {
	rating: 4,
};
asChromaticStory(FourStars);

// *****************************************************************************

export const FiveStars = Template.bind({});
FiveStars.args = {
	rating: 5,
};
asChromaticStory(FiveStars);

// *****************************************************************************

export const Small = Template.bind({});
Small.args = {
	size: 'small',
};
asChromaticStory(Small);

// *****************************************************************************

export const Medium = Template.bind({});
Medium.args = {
	size: 'medium',
};
asChromaticStory(Medium);

// *****************************************************************************

export const Large = Template.bind({});
Large.args = {
	size: 'large',
};
asChromaticStory(Large);
