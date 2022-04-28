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
			d="m21 20.5-.5.5h-17l-.5-.5v-17l.5-.5h17l.5.5v17Zm-9.5-16h-7v7h7v-7Zm8 7v-7h-7v7h7ZM5.225 8.05v-.4h.5V5.825L5.2 5.9v-.35l.775-.35h.3v2.45h.5v.4h-1.55ZM11.5 12.5h-7v7h7v-7Z"
		/>
	</svg>
);

export const SvgCrosswords = ({
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
				Crosswords
			</span>
		) : (
			''
		)}
	</>
);
