import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgEnvelope = ({
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
			<path d="M5.57143 7.2L4 8.89853L13.9524 16.825H16.0476L26 8.89853L24.4286 7.2H5.57143Z" />
			<path d="M4 20.825V11.325L13.9524 18.325H16.0476L26 11.325V20.825L24.4286 22.325H5.57143L4 20.825Z" />
		</svg>
		{isAnnouncedByScreenReader ? (
			<span
				css={css`
					${visuallyHidden}
				`}
			>
				Email
			</span>
		) : (
			''
		)}
	</>
);
