import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgEllipsis = ({
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
					d="M7.05051 10.2071L6.34343 9.5H2.70707L2 10.2071V13.8434L2.70707 14.5505H6.34343L7.05051 13.8434V10.2071ZM14.5254 10.2071L13.8183 9.5H10.1819L9.47485 10.2071V13.8434L10.1819 14.5505H13.8183L14.5254 13.8434V10.2071ZM22 10.2071L21.2929 9.5H17.6565L16.9495 10.2071V13.8434L17.6565 14.5505H21.2929L22 13.8434V10.2071Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					More
				</span>
			) : (
				''
			)}
		</>
	);
};
