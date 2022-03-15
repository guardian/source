import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgTextLarge = ({
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
					d="M13.9 19.9749L15.925 19.4749L14.5 15.0499H8.57498L7.07499 19.4749L9.17498 19.9749V20.9999H3.5V19.9249L5.24999 19.4749L11.025 3.04999H13.175L18.6999 19.4749L20.5249 19.9249V20.9999H13.9V19.9749ZM8.94998 14H14.15L11.7 6.27498H11.575L8.94998 14Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				></span>
			) : (
				''
			)}
		</>
	);
};
