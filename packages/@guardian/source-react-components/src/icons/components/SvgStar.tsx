import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgStar = ({
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
					d="M19.1513 21.3357L16.7329 13.9503L23 9.34749L22.6879 8.35931H14.9385L12.5461 0.999969H11.4539L9.08747 8.35931H1.31206L1 9.34749L7.26714 13.9503L4.90071 21.3357L5.70686 21.9598L12 17.3569L18.2931 21.9598L19.1513 21.3357Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Favourite
				</span>
			) : (
				''
			)}
		</>
	);
};
