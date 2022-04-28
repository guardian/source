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
			d="M19.25 10V6.75H16v-1.5h3.25V2h1.5v3.25H24v1.5h-3.25V10h-1.5ZM14 6c0 3.3 2.7 6 6 6v3.5L18.5 17H10l-3.025 5H6v-5H3.475L2 15.5v-9L3.5 5h10.575c-.05.325-.075.675-.075 1Z"
		/>
	</svg>
);

export const SvgSpeechBubblePlus = ({
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
				Add comment
			</span>
		) : (
			''
		)}
	</>
);
