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
			d="M23 10.75h-1.25l-.6-4.525L15.4 12 14 10.575l5.725-5.75-4.475-.575V3h7.275l.475.475v7.275ZM11 8 9.975 9H3v10h16v-5l.975-1H21v6.975L19.975 21h-18L1 19.975V8l.975-1H11v1Z"
		/>
	</svg>
);

export const SvgExternal = ({
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
				External link
			</span>
		) : (
			''
		)}
	</>
);
