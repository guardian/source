import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgChevronRightDouble = ({
	size,
	isAnnouncedByScreenReader = false,
}: IconProps): EmotionJSX.Element => (
	<>
		<svg
			viewBox="0 0 30 30"
			xmlns="http://www.w3.org/2000/svg"
			width={size ? iconSize[size] : undefined}
			aria-hidden={true}
			focusable={false}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.74998 5L15.225 14.475V15.475L5.74998 24.9499L4.79999 23.9749L12.15 14.975L4.79999 5.975L5.74998 5ZM15.75 5L25.2249 14.475V15.475L15.75 24.9499L14.8 23.9749L22.1499 14.975L14.8 5.975L15.75 5Z"
			/>
		</svg>
		{isAnnouncedByScreenReader ? (
			<span
				css={css`
					${visuallyHidden}
				`}
			>
				Double chevron right
			</span>
		) : (
			''
		)}
	</>
);
