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
			d="M24 6.1c-.875.375-1.65.6-2.625.725 1.025-.575 1.7-1.425 2.025-2.5-.875.425-1.9 1-2.875 1.075C19.7 4.575 18.6 4 17.2 4c-2.45 0-4.5 2.05-4.5 4.5 0 .275.025.75.125 1.025C9 9.325 5.875 7.575 3.5 4.8c-.325.675-.6 1.475-.6 2.275 0 1.5.8 3.025 2.025 3.75-.4.075-1.675-.325-2.075-.525 0 2.325 1.625 4 3.65 4.475-.775.2-1.375.25-2.05.075.625 1.8 2.2 3.1 4.2 3.1-1.5 1.275-3.475 1.95-5.575 1.975-.375-.075-.775 0-1.075-.075 1.925 1.275 4.425 1.975 6.925 1.975 8.275 0 12.85-6.85 12.85-12.8 0-.175-.05-.4-.05-.575A10.12 10.12 0 0 0 24 6.1Z"
		/>
	</svg>
);

export const SvgTwitter = ({
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
				Twitter logo
			</span>
		) : (
			''
		)}
	</>
);
