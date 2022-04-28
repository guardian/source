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
		<path d="M2.571 4 1 5.699l9.952 7.926h2.096L23 5.699 21.429 4H2.57Z" />
		<path d="M1 17.625v-9.5l9.952 7h2.096l9.952-7v9.5l-1.571 1.5H2.57L1 17.625Z" />
	</svg>
);

export const SvgEnvelope = ({
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
				Email
			</span>
		) : (
			''
		)}
	</>
);
