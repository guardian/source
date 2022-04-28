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
			d="m13.9 19.975 2.025-.5L14.5 15.05H8.575l-1.5 4.425 2.1.5V21H3.5v-1.075l1.75-.45L11.025 3.05h2.15L18.7 19.475l1.825.45V21H13.9v-1.025ZM8.95 14h5.2L11.7 6.275h-.125L8.95 14Z"
		/>
	</svg>
);

export const SvgTextLarge = ({
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
				Large text
			</span>
		) : (
			''
		)}
	</>
);
