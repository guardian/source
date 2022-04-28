// DO NOT EDIT
// this file is auto-generated by scripts/fetch-icons.ts
import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../../src/@types/Icons';

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
			d="M18.262 11.463v7.5h2v-8.476l-1.024-1.024H6.988l2.75-3.525-.85-.9-5.15 5.124v.675l5.1 5.126.9-.875-2.75-3.625h11.274Z"
		/>
	</svg>
);

export const SvgArrowOutdent = ({
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
				Up left arrow
			</span>
		) : (
			''
		)}
	</>
);