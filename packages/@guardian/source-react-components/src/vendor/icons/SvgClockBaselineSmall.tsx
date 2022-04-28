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
			d="M11.975 4C16.95 4 21 8.05 21 13.025c0 4.975-4.05 9-9.025 9C7 22.025 3 18 3 13.025S7 4 11.975 4Zm-.6 1.65-.625 7.675 1.25 1.05 6.35-.525v-1.225l-5.2-.3-.55-6.675h-1.225Z"
		/>
	</svg>
);

export const SvgClockBaselineSmall = ({
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
				Clock
			</span>
		) : (
			''
		)}
	</>
);
