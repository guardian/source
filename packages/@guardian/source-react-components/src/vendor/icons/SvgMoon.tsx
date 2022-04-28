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
			d="M8.035 0A12.487 12.487 0 0 0 4.48 2.312a11.536 11.536 0 0 0-.299 16.212c4.451 4.525 11.662 4.65 16.212.273 1.044-1.02 1.89-2.213 2.436-3.48-4.177 1.74-9.25.87-12.63-2.587C6.841 9.25 6.145 4.127 8.034 0Z"
		/>
	</svg>
);

export const SvgMoon = ({
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
				Dark mode
			</span>
		) : (
			''
		)}
	</>
);
