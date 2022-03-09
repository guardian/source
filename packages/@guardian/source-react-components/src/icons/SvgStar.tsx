import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgStar = ({
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
				d="M22.4499 23.5499L20.1249 16.45L26.1499 12.025L25.8499 11.075H18.4L16.1 4H15.05L12.775 11.075H5.3L5 12.025L11.025 16.45L8.74999 23.5499L9.52498 24.1499L15.575 19.7249L21.6249 24.1499L22.4499 23.5499Z"
			/>
		</svg>
		{isAnnouncedByScreenReader ? (
			<span
				css={css`
					${visuallyHidden}
				`}
			>
				Star
			</span>
		) : (
			''
		)}
	</>
);
