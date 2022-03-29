import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { remSpace } from '@guardian/source-foundations';
import type { Props } from '@guardian/source-react-components';
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

export interface StarRatingProps extends Props {
	/**
	 * The rating itself - expected to be `1`, `2`, `3`, `4` or `5`.
	 */
	rating: number;
	/**
	 * Determines how large the stars are. See the accompanying stories for visual examples.
	 */
	size: Size;
}

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-react-components-development-kitchen-star-rating--playground) •
 * [Design System](https://theguardian.design) •
 * [GitHub](https://github.com/guardian/source/tree/main/packages/@guardian/source-react-components-development-kitchen/components/star-rating) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components-development-kitchen)
 *
 * Displays a rating, 1-5, using star SVGs. See the accompanying stories for visual examples.
 *
 */
export const StarRating = ({
	rating,
	size,
	cssOverrides,
	...props
}: StarRatingProps): EmotionJSX.Element => {
	const backgroundImage = css`
		background-image: ${starBackground(rating)};
		background-repeat: no-repeat;
		display: block;
		margin: 0;
		overflow: hidden;

		figcaption {
			text-indent: -1000px;
		}
	`;

	return (
		<figure
			role="complementary"
			css={[determineSize(size), backgroundImage, cssOverrides]}
			{...props}
		>
			<figcaption>
				{rating} star{rating > 1 && 's'} out of 5
			</figcaption>
		</figure>
	);
};
