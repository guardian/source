import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from './types';

export const SvgQuote = ({
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
				d="M9.2776 8H14.0473C13.4732 12.5489 12.9653 17.0095 12.7445 22H4C4.79495 17.142 6.4511 12.5489 9.2776 8ZM20.3852 8H25.0887C24.5808 12.5489 24.0067 17.0095 23.7859 22H15.0635C15.9688 17.142 17.5587 12.5489 20.3852 8Z"
			/>
		</svg>
		{isAnnouncedByScreenReader ? (
			<span
				css={css`
					${visuallyHidden}
				`}
			>
				Quote
			</span>
		) : (
			''
		)}
	</>
);
