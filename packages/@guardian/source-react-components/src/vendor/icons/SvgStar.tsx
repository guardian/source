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
			d="m19.151 21.336-2.418-7.386L23 9.347l-.312-.988h-7.75L12.546 1h-1.092L9.087 8.36H1.312L1 9.346l6.267 4.603-2.366 7.386.806.624L12 17.357l6.293 4.603.858-.624Z"
		/>
	</svg>
);

export const SvgStar = ({
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
				Star
			</span>
		) : (
			''
		)}
	</>
);
