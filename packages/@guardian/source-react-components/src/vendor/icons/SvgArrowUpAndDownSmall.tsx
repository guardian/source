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
			d="M17.45 6.125 12.35 1h-.7l-5.1 5.125.85.85 3.6-2.75V10h2V4.225l3.6 2.75.85-.85ZM7.4 17l-.85.9 5.1 5.1h.7l5.1-5.1-.85-.9-3.6 2.75V14h-2v5.75L7.4 17Z"
		/>
	</svg>
);

export const SvgArrowUpAndDownSmall = ({
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
				Up and down arrow
			</span>
		) : (
			''
		)}
	</>
);
