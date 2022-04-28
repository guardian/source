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
			d="M9.273 2c4.023 0 7.25 3.295 7.25 7.273a7.226 7.226 0 0 1-7.25 7.25C5.25 16.523 2 13.296 2 9.273 2 5.295 5.25 2 9.273 2Zm0 1.84A5.403 5.403 0 0 0 3.84 9.274c0 3 2.409 5.454 5.432 5.454 3 0 5.454-2.454 5.454-5.454 0-3.023-2.454-5.432-5.454-5.432ZM5.636 9.956V8.59h7.273v1.364H5.636Zm10.932 4.772L22 20.16 20.16 22l-5.433-5.432v-.932l.91-.909h.931Z"
		/>
	</svg>
);

export const SvgMagnifyingGlassMinus = ({
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
				Zoom out
			</span>
		) : (
			''
		)}
	</>
);
