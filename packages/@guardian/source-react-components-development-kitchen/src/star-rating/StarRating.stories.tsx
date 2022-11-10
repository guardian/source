import type { Story } from '@storybook/react';
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

export const NoStar = Template.bind({});
NoStar.args = {
	rating: 0,
};

// *****************************************************************************

export const OneStar = Template.bind({});
OneStar.args = {
	rating: 1,
};

// *****************************************************************************

export const TwoStars = Template.bind({});
TwoStars.args = {
	rating: 2,
};

// *****************************************************************************

export const ThreeStars = Template.bind({});
ThreeStars.args = {
	rating: 3,
};

// *****************************************************************************

export const FourStars = Template.bind({});
FourStars.args = {
	rating: 4,
};

// *****************************************************************************

export const FiveStars = Template.bind({});
FiveStars.args = {
	rating: 5,
};

// *****************************************************************************

export const SmallStars = Template.bind({});
SmallStars.args = {
	size: 'small',
};

// *****************************************************************************

export const MediumStars = Template.bind({});
MediumStars.args = {
	size: 'medium',
};

// *****************************************************************************

export const LargeStars = Template.bind({});
LargeStars.args = {
	size: 'large',
};
