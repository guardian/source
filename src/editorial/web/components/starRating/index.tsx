import { css } from '@emotion/react';
import { remSpace } from '@guardian/src-foundations';
import type { Props } from '@guardian/src-helpers';
import { starBackground } from './star';

// https://docs.google.com/spreadsheets/d/1QUa5Kh734J4saFc8ERjCYHZu10_-Hj7llNa2rr8urNg/edit?usp=sharing
// A list style variations for each breakpoint

type Size = 'large' | 'medium' | 'small';

const determineSize = (size: Size) => {
	switch (size) {
		case 'small':
			return css`
				padding: 0.0625rem;
				width: calc(5 * ${remSpace[3]});
				height: ${remSpace[3]};
			`;
		case 'medium':
			return css`
				padding: 0.0625rem;
				width: calc(5 * ${remSpace[4]});
				height: ${remSpace[4]};
			`;
		case 'large':
			return css`
				padding: 0.125rem;
				width: calc(5 * ${remSpace[5]});
				height: ${remSpace[5]};
			`;
	}
};

interface StarRatingProps extends Props {
	rating: number;
	size: Size;
}

const StarRating = ({
	rating,
	size,
	cssOverrides,
	...props
}: StarRatingProps) => {
	const backgroundImage = css`
		background-image: ${starBackground(rating)};
		background-repeat: no-repeat;
	`;

	return (
		<div
			css={[determineSize(size), backgroundImage, cssOverrides]}
			{...props}
		></div>
	);
};

export { StarRating };
