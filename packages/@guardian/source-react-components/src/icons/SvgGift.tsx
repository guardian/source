import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgGift = ({
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
				d="M9.13332 7.66667L11.3521 5L15 9.34084L18.6478 5L20.8667 7.66667L17.1215 9.8H21.9333L23 10.8667V16.3067H16.0667V10.3333H15H13.9333V16.3067L7 16.3067V10.8667L8.06667 9.80003L12.8785 9.80001L9.13332 7.66667ZM13.9333 18.9733H7.37712V24.2L8.43999 25.2667H13.9333V18.9733ZM22.6267 18.9733H16.0667V25.2667H21.4L22.6267 24.2V18.9733Z"
			/>
		</svg>
		{isAnnouncedByScreenReader ? (
			<span
				css={css`
					${visuallyHidden}
				`}
			>
				Gift
			</span>
		) : (
			''
		)}
	</>
);
