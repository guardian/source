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
			d="m2.712 2 9.5 9.499V12.5L2.711 22l-.952-.977L9.128 12 1.76 2.977 2.712 2Zm10.026 0 9.498 9.499V12.5L12.738 22l-.953-.977L19.154 12l-7.369-9.023.953-.977Z"
		/>
	</svg>
);

export const SvgChevronRightDouble = ({
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
				Double chevron right
			</span>
		) : (
			''
		)}
	</>
);
