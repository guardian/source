import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgArrowOutdent = ({
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
					d="M18.2625 11.4625V18.9625H20.2625V10.4875L19.2375 9.46251H6.98754L9.73753 5.93752L8.88753 5.03752L3.73755 10.1625V10.8375L8.83753 15.9625L9.73753 15.0875L6.98754 11.4625H18.2625Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Up left arrow
				</span>
			) : (
				''
			)}
		</>
	);
};
