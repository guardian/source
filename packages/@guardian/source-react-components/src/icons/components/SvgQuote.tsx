import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgQuote = ({
	size,
	isAnnouncedByScreenReader = false,
}: IconProps): EmotionJSX.Element => {
	return (
		<>
			<svg
				viewBox="-3 -3 30 30"
				xmlns="http://www.w3.org/2000/svg"
				width={size ? iconSize[size] : undefined}
				aria-hidden={true}
				focusable={false}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M6.50566 4.70001H11.4815C10.8826 9.44548 10.3527 14.0988 10.1224 19.305H1C1.82931 14.237 3.55702 9.44548 6.50566 4.70001ZM18.0933 4.70001H23C22.4702 9.44548 21.8712 14.0988 21.6409 19.305H12.5416C13.486 14.237 15.1446 9.44548 18.0933 4.70001Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Quote
				</span>
			) : (
				''
			)}
		</>
	);
};
