import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { neutral, remSpace } from '@guardian/source-foundations';

// https://docs.google.com/spreadsheets/d/1QUa5Kh734J4saFc8ERjCYHZu10_-Hj7llNa2rr8urNg/edit?usp=sharing
// A list style variations for each breakpoint

type Size = 'large' | 'medium' | 'small';

const svgSize = (size: Size) => {
	switch (size) {
		case 'small':
			return css`
				display: block;
				width: calc(5 * ${remSpace[3]});
				height: ${remSpace[3]};
			`;
		case 'medium':
			return css`
				display: block;
				width: calc(5 * ${remSpace[4]});
				height: ${remSpace[4]};
			`;
		case 'large':
			return css`
				display: block;
				width: calc(5 * ${remSpace[5]});
				height: ${remSpace[5]};
			`;
	}
};

const figureStyles = (size: Size) => css`
	display: block;
	padding: ${size === 'large' ? '0.125rem' : '0.0625rem'};
	margin: 0;
	overflow: hidden;

	figcaption {
		text-indent: -1000px;
	}
`;

export interface StarRatingProps {
	/**
	 * The rating itself - expected to be `0`, `1`, `2`, `3`, `4` or `5`.
	 */
	rating: number;
	/**
	 * Determines how large the stars are. See the accompanying stories for visual examples.
	 */
	size: Size;
	cssOverrides?: SerializedStyles | SerializedStyles[];
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
	return (
		<figure
			role="complementary"
			css={[figureStyles(size), cssOverrides]}
			{...props}
		>
			<svg
				css={svgSize(size)}
				viewBox={`0 0 ${24 * 5} 24`}
				fill={neutral[7]}
				aria-hidden="true"
				focusable="false"
			>
				{Array(5)
					.fill('')
					.map((_, index) => {
						/** from https://www.figma.com/file/Ai7AELHC6KCz38qKZkvuHo/%E2%97%90-Icons?node-id=2810%3A6938 */
						const star =
							index < rating ? (
								<path d="M19.1513 21.3357L16.7329 13.9503L23 9.34749L22.6879 8.35931H14.9385L12.5461 0.999969H11.4539L9.08747 8.35931H1.31206L1 9.34749L7.26714 13.9503L4.90071 21.3357L5.70686 21.9598L12 17.3569L18.2931 21.9598L19.1513 21.3357Z" />
							) : (
								<path d="M14.3813 13.1959L18.2436 10.3593H13.4857L12.0074 5.81203L10.5452 10.3593H5.75638L9.61086 13.1902L8.17276 17.6783L12 14.8791L15.8561 17.6994L14.3813 13.1959ZM19.1513 21.3357L18.2931 21.9598L12 17.3569L5.70686 21.9598L4.90071 21.3357L7.26714 13.9503L1 9.34749L1.31206 8.35931H9.08747L11.4539 0.999969H12.5461L14.9385 8.35931H22.6879L23 9.34749L16.7329 13.9503L19.1513 21.3357Z" />
							);

						return (
							<g key={index} transform={`translate(${index * 24}, 0)`}>
								{star}
							</g>
						);
					})}
			</svg>

			<figcaption>
				{rating} star{rating > 1 && 's'} out of 5
			</figcaption>
		</figure>
	);
};
