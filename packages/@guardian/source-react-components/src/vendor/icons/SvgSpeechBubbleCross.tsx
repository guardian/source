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
			d="M22.3 9.7 20 7.4l-2.3 2.3-1.05-1.05 2.3-2.3-2.3-2.3L17.7 3 20 5.3 22.3 3l1.05 1.05-2.3 2.3 2.3 2.3L22.3 9.7ZM14 6.35c0 3.3 2.7 6 6 6v3.5l-1.5 1.5H10l-3.025 5H6v-5H3.475L2 15.85v-9l1.5-1.5h10.575c-.05.325-.075.675-.075 1Z"
		/>
	</svg>
);

export const SvgSpeechBubbleCross = ({
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
				Remove comment
			</span>
		) : (
			''
		)}
	</>
);
