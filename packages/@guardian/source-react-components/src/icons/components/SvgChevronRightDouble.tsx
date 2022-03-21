import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgChevronRightDouble = ({
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
					d="M2.71239 2L12.2111 11.4987V12.5013L2.71239 22L1.76001 21.0226L9.12843 12L1.76001 2.97744L2.71239 2ZM12.7375 2L22.2362 11.4987V12.5013L12.7375 22L11.7851 21.0226L19.1535 12L11.7851 2.97744L12.7375 2Z"
				></path>
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
};
