import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../../@types/Icons';

const Svg = ({ size }: IconProps): EmotionJSX.Element => (
	<svg
		width={size ? iconSize[size] : undefined}
		height={undefined}
		viewBox="-3 -3 30 30"
		xmlns="http://www.w3.org/2000/svg"
		focusable={false}
		aria-hidden={true}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M10.3 9.5c1.825 0 3.975-2.05 3.975-4.55S12.8 1 10.3 1 6.35 2.45 6.35 4.95 8.675 9.5 10.3 9.5Zm12.35 3.8-1.05 1.05-2.3-2.3-2.3 2.3-1.05-1.05 2.3-2.3-2.3-2.3L17 7.65l2.3 2.3 2.3-2.3 1.05 1.05-2.3 2.3 2.3 2.3ZM10.3 11.5c1.075 0 2.1.075 3.025.25.275 2.6 2.325 4.7 4.875 5.15l1.1 4.1-1.025 1h-16L1.3 21l1.975-7.5L4.3 12.475c2-.675 3.8-.975 6-.975Z"
		/>
	</svg>
);

export const SvgPersonCross = ({
	size,
	isAnnouncedByScreenReader = false,
}: IconProps): EmotionJSX.Element => (
	<>
		<Svg size={size} />
		{isAnnouncedByScreenReader ? (
			<span
				css={css`
					${visuallyHidden}
				`}
			>
				Remove user
			</span>
		) : (
			''
		)}
	</>
);
