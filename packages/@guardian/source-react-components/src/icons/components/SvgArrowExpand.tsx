import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../types';

export const SvgArrowExpand = ({
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
					d="M22.9999 8.74997V1.5L22.4999 1H15.25V2.25L19.7499 2.84999L14 8.57497L15.4 9.99997L21.1499 4.27499L21.7499 8.74997H22.9999ZM1 15.25V22.4999L1.475 22.9999H8.72497V21.7499L4.24999 21.1499L9.97497 15.375L8.59997 14L2.82499 19.7249L2.25 15.25H1Z"
				></path>
			</svg>
			{isAnnouncedByScreenReader ? (
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					Arrow, Arrows, Expand,
				</span>
			) : (
				''
			)}
		</>
	);
};
