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
			d="M2 15.75h3.75L11 21h1V3h-1L5.75 8.25H2l-1 1v5.5l1 1ZM17.28 12l-3.4 3.85.725.725 3.825-3.425 3.85 3.425.725-.725L19.58 12l3.425-3.85-.725-.725-3.85 3.425-3.825-3.425-.725.725 3.4 3.85Z"
		/>
	</svg>
);

export const SvgAudioMute = ({
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
				Sound off
			</span>
		) : (
			''
		)}
	</>
);
