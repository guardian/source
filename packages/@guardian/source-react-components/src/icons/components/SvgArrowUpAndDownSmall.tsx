import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgArrowUpAndDownSmall = ({
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
					d="M17.45 6.12501L12.35 1.00003H11.65L6.55005 6.12501L7.40005 6.97501L11 4.22502V10H13V4.22502L16.6 6.97501L17.45 6.12501ZM7.40005 17L6.55005 17.9L11.65 23H12.35L17.45 17.9L16.6 17L13 19.75V14H11V19.75L7.40005 17Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Arrow, Arrows, Up, Down,
				</span>
			) : (
				''
			)}
		</>
	);
};
