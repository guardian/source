import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgClock = ({
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
					d="M22 12C22 17.5227 17.5227 22 12 22C6.47727 22 2 17.5227 2 12C2 6.47727 6.47727 2 12 2C17.5227 2 22 6.47727 22 12ZM13.091 11.6818L12.432 3.81819H11.5456L10.8638 12.3409L12.0229 13.5L18.3638 12.9091V12L13.091 11.6818Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Clock
				</span>
			) : (
				''
			)}
		</>
	);
};
