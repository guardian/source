import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgLocationMarker = ({
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
					d="M18 6.99998C18 7.82498 17.85 8.69997 17.5 9.64997L12.5 22.9999H11.5L6.55 9.59997C6.25 8.79997 6 7.87498 6 6.99998C6 3.69999 8.69999 1 12 1C15.3 1 18 3.69999 18 6.99998ZM7.74999 6.99998C7.74999 9.32497 9.67499 11.25 12 11.25C14.325 11.25 16.25 9.32497 16.25 6.99998C16.25 4.67499 14.325 2.74999 12 2.74999C9.67499 2.74999 7.74999 4.67499 7.74999 6.99998Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Location
				</span>
			) : (
				''
			)}
		</>
	);
};
