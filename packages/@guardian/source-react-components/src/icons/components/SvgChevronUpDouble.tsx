import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgChevronUpDouble = ({
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
					d="M2 11.2588L11.4987 1.76001H12.5013L22 11.2588L21.0226 12.2111L12 4.84272L2.97744 12.2111L2 11.2588ZM2 21.2838L11.4987 11.7851H12.5013L22 21.2838L21.0226 22.2362L12 14.8678L2.97744 22.2362L2 21.2838Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Chevron, Double Chevron, Up,
				</span>
			) : (
				''
			)}
		</>
	);
};
