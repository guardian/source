import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgChevronDownDouble = ({
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
					d="M2 2.71239L2.97744 1.76001L12 9.12843L21.0226 1.76001L22 2.71239L12.5013 12.2111H11.4987L2 2.71239ZM2 12.7375L2.97744 11.7851L12 19.1535L21.0226 11.7851L22 12.7375L12.5013 22.2362H11.4987L2 12.7375Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Double chevron down
				</span>
			) : (
				''
			)}
		</>
	);
};
