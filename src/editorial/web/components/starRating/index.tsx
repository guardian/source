import type { FC } from 'react';
import { css } from '@emotion/react';
import { Star } from './star';
import { remSpace } from '@guardian/src-foundations';
import type { Props } from '@guardian/src-helpers';

// https://docs.google.com/spreadsheets/d/1QUa5Kh734J4saFc8ERjCYHZu10_-Hj7llNa2rr8urNg/edit?usp=sharing
// A list style variations for each breakpoint

const starWrapper = css`
	display: inline-block;
	padding: 0.0625rem;
`;

type Size = 'large' | 'medium' | 'small';

const determineSize = (size: Size) => {
	switch (size) {
		case 'small':
			return css`
				padding: 0.0625rem;
				svg {
					width: ${remSpace[3]};
					height: ${remSpace[3]};
				}
			`;
		case 'medium':
			return css`
				padding: 0.0625rem;
				svg {
					width: ${remSpace[4]};
					height: ${remSpace[4]};
				}
			`;
		case 'large':
			return css`
				padding: 0.125rem;
				svg {
					width: ${remSpace[5]};
					height: ${remSpace[5]};
				}
			`;
	}
};

interface StarRatingProps extends Props {
	rating: number;
	size: Size;
}

const StarRating: FC<StarRatingProps> = ({
	rating,
	size,
	cssOverrides,
	...props
}) => (
	<div css={[determineSize(size), cssOverrides]} {...props}>
		<div css={starWrapper}>
			<Star starId={`${size}1`} isEmpty={rating < 1} />
		</div>
		<div css={starWrapper}>
			<Star starId={`${size}2`} isEmpty={rating < 2} />
		</div>
		<div css={starWrapper}>
			<Star starId={`${size}3`} isEmpty={rating < 3} />
		</div>
		<div css={starWrapper}>
			<Star starId={`${size}4`} isEmpty={rating < 4} />
		</div>
		<div css={starWrapper}>
			<Star starId={`${size}5`} isEmpty={rating < 5} />
		</div>
	</div>
);

export { StarRating };
