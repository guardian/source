import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgChevronLeftDouble = ({
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
					d="M11.2588 2L12.2111 2.97744L4.84272 12L12.2111 21.0226L11.2588 22L1.76001 12.5013V11.4987L11.2588 2ZM21.2838 2L22.2362 2.97744L14.8678 12L22.2362 21.0226L21.2838 22L11.7851 12.5013V11.4987L21.2838 2Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Chevron, Double Chevron, Left,
				</span>
			) : (
				''
			)}
		</>
	);
};
