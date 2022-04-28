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
			d="m2 11.259 9.499-9.499H12.5L22 11.259l-.977.952L12 4.843 2.977 12.21 2 11.26Zm0 10.025 9.499-9.499H12.5L22 21.284l-.977.952L12 14.868l-9.023 7.368L2 21.284Z"
		/>
	</svg>
);

export const SvgChevronUpDouble = ({
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
				Double chevron up
			</span>
		) : (
			''
		)}
	</>
);
